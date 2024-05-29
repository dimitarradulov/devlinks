import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'customize',
    loadComponent: () =>
      import('./pages/customize/customize.component').then(
        (a) => a.CustomizeComponent,
      ),
  },
];
