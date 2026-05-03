import { Component, inject, OnInit } from '@angular/core';
import { BreadcrumbsService } from '../../core/breadcrumbs.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class AboutComponent implements OnInit {
  private readonly breadcrumbs = inject(BreadcrumbsService);

  ngOnInit(): void {
    this.breadcrumbs.set([{ label: 'Home', url: '/' }, { label: 'About' }]);
  }
}
