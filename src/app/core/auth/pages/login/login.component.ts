import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

import { AuthFormComponent } from '../../components/auth-form/auth-form.component';
import { LogoComponent } from '../../../../shared/components/logo/logo.component';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, AuthFormComponent, LogoComponent],
})
export class LoginComponent {
  examplevalue = signal('');

  logToConsole() {
    console.log('button clicked!');
  }
}
