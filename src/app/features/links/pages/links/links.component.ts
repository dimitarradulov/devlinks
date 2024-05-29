import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from '../../../../core/layout/header/header.component';

@Component({
  selector: 'app-links',
  standalone: true,
  imports: [RouterModule, HeaderComponent],
  template: `
    <app-header />
    <router-outlet />
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LinksComponent {}
