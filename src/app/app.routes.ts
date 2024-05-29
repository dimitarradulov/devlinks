import { Routes } from '@angular/router';
import { redirectUnauthorizedTo, canActivate } from '@angular/fire/auth-guard';

const redirectUnauthorizedToLogin = () =>
  redirectUnauthorizedTo(['auth/login']);

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
    loadComponent: () =>
      import('./features/links/pages/links/links.component').then(
        (a) => a.LinksComponent,
      ),
    loadChildren: () =>
      import('./features/links/links.routes').then((m) => m.routes),
    ...canActivate(redirectUnauthorizedToLogin),
  },
];
