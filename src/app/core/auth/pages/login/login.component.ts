import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

import { AuthComponent } from '../../components/auth/auth.component';
import { AuthCredentials } from '../../models/auth.model';

@Component({
  selector: 'app-login',
  standalone: true,
  template: ` <app-auth type="login" (onSubmit)="logToConsole($event)" /> `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, AuthComponent],
})
export class LoginComponent {
  logToConsole(value: AuthCredentials) {
    console.log(value);
  }
}
