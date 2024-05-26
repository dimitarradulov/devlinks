import { Routes } from '@angular/router';
import { redirectUnauthorizedTo, canActivate } from '@angular/fire/auth-guard';

const redirectUnauthorizedToLogin = () =>
  redirectUnauthorizedTo(['auth/login']);

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'customize',
  },
  {
    path: 'customize',
    loadComponent: () =>
      import('./pages/customize/customize.component').then(
        (m) => m.CustomizeComponent,
      ),
    ...canActivate(redirectUnauthorizedToLogin),
  },
];
