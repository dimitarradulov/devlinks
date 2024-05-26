import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';

import { AuthComponent } from '../../components/auth/auth.component';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  template: `
    <app-auth type="login" (onSubmit)="authService.loginAction.next($event)" />
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, AuthComponent],
})
export class LoginComponent {
  authService = inject(AuthService);
}
