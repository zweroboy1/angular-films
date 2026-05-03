import { Component, inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BreadcrumbsService } from '../../core/breadcrumbs.service';

@Component({
  selector: 'app-not-found',
  imports: [RouterLink],
  templateUrl: './not-found.html',
  styleUrl: './not-found.scss',
})
export class NotFoundComponent implements OnInit {
  private readonly breadcrumbs = inject(BreadcrumbsService);

  ngOnInit(): void {
    this.breadcrumbs.set([{ label: 'Home', url: '/' }, { label: '404' }]);
  }
}
