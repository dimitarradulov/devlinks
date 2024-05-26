import {
  ChangeDetectionStrategy,
  Component,
  input,
  output,
} from '@angular/core';
import { FormsModule } from '@angular/forms';

import { BoxComponent } from '../../../../shared/components/box/box.component';
import { InputComponent } from '../../../../shared/components/input/input.component';
import { LogoComponent } from '../../../../shared/components/logo/logo.component';
import { AuthCredentials } from '../../models/auth.model';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [FormsModule, BoxComponent, InputComponent, LogoComponent],
  templateUrl: './auth.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthComponent {
  readonly type = input.required<'login' | 'register'>();
  readonly onSubmit = output<AuthCredentials>();

  protected onFormSubmit(credentials: AuthCredentials) {
    this.onSubmit.emit(credentials);
  }
}
