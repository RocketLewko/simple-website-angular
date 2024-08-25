import { formatDate } from '@angular/common';

export function getFormattedDate(date: Date): string {
  return formatDate(date, 'dd.MM.yyyy HH:mm', 'pl-PL');
}
