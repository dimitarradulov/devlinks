import { ChangeDetectionStrategy, Component } from '@angular/core';

import { AuthComponent } from '../../components/auth/auth.component';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [AuthComponent],
  template: ` <app-auth type="register" /> `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegisterComponent {}
