import { Component, computed, inject, input, OnInit } from '@angular/core';
import { BreadcrumbsService } from '../../core/breadcrumbs.service';
import { FilmsService } from '../../core/films.service';
import { DurationPipe } from '../../shared/pipes/duration.pipe';

@Component({
  selector: 'app-film-detail',
  imports: [DurationPipe],
  templateUrl: './film-detail.html',
})
export class FilmDetailComponent implements OnInit {
  private readonly breadcrumbs = inject(BreadcrumbsService);
  private readonly filmsService = inject(FilmsService);

  readonly id = input<string>('');

  readonly film = computed(() => this.filmsService.getById(Number(this.id())));

  ngOnInit(): void {
    this.breadcrumbs.set([
      { label: 'Home', url: '/' },
      { label: this.film()?.title ?? 'Film #' + this.id() },
    ]);
  }
}
