import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'links',
  },
  {
    path: 'auth',
    loadChildren: () => import('./core/auth/auth.routes').then((m) => m.routes),
  },
  {
    path: 'links',
    loadChildren: () =>
      import('./features/links/links.routes').then((m) => m.routes),
  },
];
