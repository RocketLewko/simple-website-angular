import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  input,
  output,
  signal,
} from '@angular/core';

import { ImageModel } from '../../models/image';

@Component({
  selector: 'app-image-gallery',
  standalone: true,
  imports: [],
  templateUrl: './image-gallery.component.html',
  styleUrl: './image-gallery.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ImageGalleryComponent {
  images = input.required<ImageModel[]>();
  closed = output<void>();
  currentIndex = signal<number>(0);

  nextImage() {
    this.currentIndex.update((index) => (index + 1) % this.images().length);
  }

  prevImage() {
    this.currentIndex.update(
      (index) => (index - 1 + this.images().length) % this.images().length
    );
  }

  close() {
    const element = document.querySelector('app-image-carousel');
    if (element) {
      element.remove();
    }
  }
}
