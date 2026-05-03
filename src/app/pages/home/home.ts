import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { BreadcrumbsService } from '../../core/breadcrumbs.service';
import { FilmsService } from '../../core/films.service';
import { FilmCardComponent } from '../../shared/film-card/film-card';
import { AutofocusDirective } from '../../shared/directives/autofocus.directive';

@Component({
  selector: 'app-home',
  imports: [FilmCardComponent, AutofocusDirective],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class HomeComponent implements OnInit {
  private readonly breadcrumbs = inject(BreadcrumbsService);
  protected readonly filmsService = inject(FilmsService);

  readonly query = signal('');

  readonly filteredFilms = computed(() => {
    const q = this.query().toLowerCase().trim();
    if (!q) return this.filmsService.films();
    return this.filmsService.films().filter((f) => f.title.toLowerCase().includes(q));
  });

  ngOnInit(): void {
    this.breadcrumbs.set([{ label: 'Home' }]);
  }

  onSearch(event: Event): void {
    this.query.set((event.target as HTMLInputElement).value);
  }

  onToggleFavorite(id: number): void {
    this.filmsService.toggleFavorite(id);
  }
}
