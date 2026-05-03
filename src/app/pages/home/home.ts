import { Component, inject, OnInit } from '@angular/core';
import { BreadcrumbsService } from '../../core/breadcrumbs.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.html',
})
export class HomeComponent implements OnInit {
  private readonly breadcrumbs = inject(BreadcrumbsService);

  ngOnInit(): void {
    this.breadcrumbs.set([{ label: 'Home' }]);
  }
}
