import { Routes } from '@angular/router';
import { redirectLoggedInTo, AuthGuard } from '@angular/fire/auth-guard';

const redirectLoggedInToLinks = () => redirectLoggedInTo(['links']);

export const routes: Routes = [
  {
    path: 'login',
    loadComponent: () =>
      import('./pages/auth/auth.component').then((m) => m.AuthComponent),
    canActivate: [AuthGuard],
    data: { authGuardPipe: redirectLoggedInToLinks, type: 'login' },
  },
  {
    path: 'register',
    loadComponent: () =>
      import('./pages/auth/auth.component').then((m) => m.AuthComponent),
    canActivate: [AuthGuard],
    data: { authGuardPipe: redirectLoggedInToLinks, type: 'register' },
  },
];
