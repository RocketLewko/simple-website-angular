import { AsyncPipe, DatePipe } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  afterNextRender,
  signal,
} from '@angular/core';

import { getFormattedDate } from 'src/app/utils/date';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [DatePipe, AsyncPipe],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent implements OnDestroy {
  private intervalId: number | NodeJS.Timeout | undefined;

  currentDateTime = signal<{ date: string; time: string }>({
    date: '',
    time: '',
  });

  constructor() {
    afterNextRender(() => {
      this.startClock();
    });
  }

  private startClock(): void {
    this.updateTime();
    this.intervalId = setInterval(() => {
      this.updateTime();
    }, 1000);
  }

  private updateTime(): void {
    const now = new Date();
    const formattedDateTime = getFormattedDate(now);
    const [date, time] = formattedDateTime.split(' ');

    this.currentDateTime.set({
      date,
      time,
    });
  }

  ngOnDestroy(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }
}
