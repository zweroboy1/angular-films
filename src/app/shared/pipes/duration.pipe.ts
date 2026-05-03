import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'duration', standalone: true })
export class DurationPipe implements PipeTransform {
  transform(minutes: number): string {
    const h = Math.floor(minutes / 60);
    const m = minutes % 60;

    if (h && m) return `${h}h ${m}min`;
    if (h) return `${h}h`;
    return `${m}min`;
  }
}
