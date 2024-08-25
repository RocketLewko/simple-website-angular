import { ChangeDetectionStrategy, Component, output } from '@angular/core';

import { MAIN_PAGE_TEXT } from '../../utils/constants/main-page-text.constants';

@Component({
  selector: 'app-article',
  standalone: true,
  imports: [],
  templateUrl: './article.component.html',
  styleUrl: './article.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ArticleComponent {
  onShowGallery = output<void>();

  readonly introductionText = MAIN_PAGE_TEXT.INTRODUCTION;
  readonly fullDescriptionText = MAIN_PAGE_TEXT.FULL_DESCRIPTION;

  expanded = false;

  toggleReadMore() {
    this.expanded = !this.expanded;
  }
}
