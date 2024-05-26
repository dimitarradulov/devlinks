import { Routes } from '@angular/router';
import { redirectLoggedInTo, canActivate } from '@angular/fire/auth-guard';

const redirectLoggedInToLinks = () => redirectLoggedInTo(['links']);

export const routes: Routes = [
  {
    path: 'login',
    loadComponent: () =>
      import('./pages/login/login.component').then((m) => m.LoginComponent),
    ...canActivate(redirectLoggedInToLinks),
  },
  {
    path: 'register',
    loadComponent: () =>
      import('./pages/register/register.component').then(
        (m) => m.RegisterComponent,
      ),
    ...canActivate(redirectLoggedInToLinks),
  },
];
