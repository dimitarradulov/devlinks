import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { BoxComponent } from '../../../../shared/components/box/box.component';
import { InputComponent } from '../../../../shared/components/input/input.component';

@Component({
  selector: 'app-auth-form',
  standalone: true,
  imports: [CommonModule, FormsModule, BoxComponent, InputComponent],
  templateUrl: './auth-form.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthFormComponent {
  readonly type = input.required<'login' | 'register'>();
}
