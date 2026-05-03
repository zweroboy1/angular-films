import { computed, effect, Injectable, signal } from '@angular/core';
import { httpResource } from '@angular/common/http';
import { Film } from './film.model';

@Injectable({ providedIn: 'root' })
export class FilmsService {
  private readonly _films = signal<Film[]>([]);

  private readonly _resource = httpResource<Film[]>(() => '/films.json');

  constructor() {
    effect(() => {
      const data = this._resource.value();
      if (data) this._films.set(data);
    });
  }

  readonly films = this._films.asReadonly();

  readonly isLoading = this._resource.isLoading;

  readonly error = this._resource.error;

  readonly favorites = computed(() => this._films().filter((f) => f.isFavorite));

  getById(id: number): Film | undefined {
    return this._films().find((f) => f.id === id);
  }

  toggleFavorite(id: number): void {
    this._films.update((films) =>
      films.map((f) => (f.id === id ? { ...f, isFavorite: !f.isFavorite } : f)),
    );
  }
}
