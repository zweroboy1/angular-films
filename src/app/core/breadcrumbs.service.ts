import { Injectable, signal } from '@angular/core';

export interface Breadcrumb {
  label: string;
  url?: string;
}

@Injectable({ providedIn: 'root' })
export class BreadcrumbsService {
  readonly breadcrumbs = signal<Breadcrumb[]>([{ label: 'Home', url: '/' }]);

  set(crumbs: Breadcrumb[]): void {
    this.breadcrumbs.set(crumbs);
  }
}
