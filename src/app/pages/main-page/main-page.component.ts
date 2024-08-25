import {
  ChangeDetectionStrategy,
  Component,
  ComponentRef,
  ViewContainerRef,
  inject,
} from '@angular/core';

import { ArticleComponent } from '../../features/article/article.component';
import { ImageGalleryComponent } from '../../features/image-gallery/image-gallery.component';
import { ImageModel } from '../../models/image';
import { MainPageService } from './main-page.service';
import { Observable } from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [ArticleComponent],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainPageComponent {
  private readonly viewContainerRef = inject(ViewContainerRef);
  private readonly service = inject(MainPageService);
  readonly fetchImages$: Observable<ImageModel[]> = this.service.getImages();
  readonly imagesSignal = toSignal(this.fetchImages$, { initialValue: [] });

  #componentRef?: ComponentRef<ImageGalleryComponent>;

  createComponent() {
    this.#componentRef = this.viewContainerRef.createComponent(
      ImageGalleryComponent
    );

    this.#componentRef?.setInput('images', this.imagesSignal());

    this.#componentRef.instance.closed.subscribe(() =>
      this.#componentRef?.destroy()
    );
  }
}
