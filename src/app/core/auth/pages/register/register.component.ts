import { ChangeDetectionStrategy, Component, inject } from '@angular/core';

import { AuthComponent } from '../../components/auth/auth.component';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [AuthComponent],
  template: `
    <app-auth
      type="register"
      (onSubmit)="authService.registerAction.next($event)"
    />
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegisterComponent {
  authService = inject(AuthService);
}
