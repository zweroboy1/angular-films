import { Component, computed, effect, inject, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BreadcrumbsService } from '../../core/breadcrumbs.service';
import { FilmsService } from '../../core/films.service';
import { DurationPipe } from '../../shared/pipes/duration.pipe';

@Component({
  selector: 'app-film-detail',
  imports: [DurationPipe, RouterLink],
  templateUrl: './film-detail.html',
  styleUrl: './film-detail.scss',
})
export class FilmDetailComponent {
  private readonly breadcrumbs = inject(BreadcrumbsService);
  protected readonly filmsService = inject(FilmsService);

  readonly id = input<string>('');

  readonly film = computed(() => this.filmsService.getById(Number(this.id())));

  constructor() {
    effect(() => {
      this.breadcrumbs.set([
        { label: 'Home', url: '/' },
        { label: this.film()?.title ?? 'Film #' + this.id() },
      ]);
    });
  }
}
