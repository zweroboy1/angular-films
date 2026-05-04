# Film Collection

A movie catalog SPA built with **Angular 20** as part of the [RSS Angular Intro Task](https://github.com/rolling-scopes-school/tasks/blob/master/angular/tasks/angular-intro-task/README.md).

## Features

- Browse a film catalog with poster, title, year, genre, rating, and duration
- Live search — filter films by title in real time
- Toggle films as favorites
- Film detail page with full information
- SPA routing with lazy-loaded components
- Custom `duration` pipe (minutes → "2h 30min")
- Custom `autofocus` directive
- Breadcrumbs on every page
- Responsive layout (mobile-friendly)
- 404 page

## Tech Stack

- Angular 20 (Standalone Components, Zoneless)
- TypeScript (strict mode)
- Angular Signals — no RxJS in application code
- SCSS (BEM, CSS variables)
- Angular Router with `withComponentInputBinding()`
- `httpResource()` for data fetching

## Getting Started

### Prerequisites

- Node.js 18+
- Angular CLI 20+

```bash
npm install -g @angular/cli@20
```

### Install dependencies

```bash
npm install
```

### Run development server

```bash
npm start
```

Open [http://localhost:4200](http://localhost:4200) in your browser.

### Build for production

```bash
npm run build
```

Output will be in `dist/angular-films/browser/`.

### Run linter

```bash
npm run lint
```

## Project Structure

```
src/app/
├── core/                  # Services, models
│   ├── films.service.ts   # Film data, favorites, signal-based
│   ├── breadcrumbs.service.ts
│   └── film.model.ts
├── layout/                # Header, Breadcrumbs, Footer
├── pages/                 # Route components
│   ├── home/              # Catalog + search
│   ├── film-detail/       # Film detail page
│   ├── about/             # About page
│   └── not-found/         # 404
└── shared/                # Reusable components, pipes, directives
    ├── film-card/
    ├── pipes/duration.pipe.ts
    └── directives/autofocus.directive.ts
```

## Deploy

Deployed on Netlify. Configuration in `netlify.toml`.
