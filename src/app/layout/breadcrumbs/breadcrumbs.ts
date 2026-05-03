import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BreadcrumbsService } from '../../core/breadcrumbs.service';

@Component({
  selector: 'app-breadcrumbs',
  imports: [RouterLink],
  templateUrl: './breadcrumbs.html',
  styleUrl: './breadcrumbs.scss',
})
export class BreadcrumbsComponent {
  protected readonly breadcrumbsService = inject(BreadcrumbsService);
}
