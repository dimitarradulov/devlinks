import { Routes } from '@angular/router';
import { redirectUnauthorizedTo, canActivate } from '@angular/fire/auth-guard';

import { AppComponent } from './app.component';

const redirectUnauthorizedToLogin = () =>
  redirectUnauthorizedTo(['auth/login']);

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: AppComponent,
    ...canActivate(redirectUnauthorizedToLogin),
  },
  {
    path: 'auth',
    loadChildren: () => import('./core/auth/auth.routes').then((m) => m.routes),
  },
];
