import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

import { BoxComponent } from '../../../../shared/components/box/box.component';
import { InputComponent } from '../../../../shared/components/input/input.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, BoxComponent, InputComponent, FormsModule],
})
export class LoginComponent {
  examplevalue = signal('');

  logToConsole() {
    console.log('button clicked!');
  }
}
