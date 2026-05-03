import { Component, inject, input, OnInit } from '@angular/core';
import { BreadcrumbsService } from '../../core/breadcrumbs.service';

@Component({
  selector: 'app-film-detail',
  templateUrl: './film-detail.html',
})
export class FilmDetailComponent implements OnInit {
  private readonly breadcrumbs = inject(BreadcrumbsService);

  readonly id = input<string>('');

  ngOnInit(): void {
    this.breadcrumbs.set([
      { label: 'Home', url: '/' },
      { label: 'Film #' + this.id() },
    ]);
  }
}
