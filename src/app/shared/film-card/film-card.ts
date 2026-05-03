import { Component, input, output } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Film } from '../../core/film.model';
import { DurationPipe } from '../pipes/duration.pipe';

@Component({
  selector: 'app-film-card',
  imports: [RouterLink, DurationPipe],
  templateUrl: './film-card.html',
  styleUrl: './film-card.scss',
})
export class FilmCardComponent {
  readonly film = input.required<Film>();
  readonly toggleFavorite = output<number>();

  onToggle(event: Event): void {
    event.stopPropagation();
    event.preventDefault();
    this.toggleFavorite.emit(this.film().id);
  }
}
