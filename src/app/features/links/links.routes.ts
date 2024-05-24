import { Routes } from '@angular/router';

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
        (m) => m.CustomizeComponent
      ),
  },
];
