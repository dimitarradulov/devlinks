import {
  ChangeDetectionStrategy,
  Component,
  effect,
  inject,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

import { BoxComponent } from '../../../../shared/components/box/box.component';
import { InputComponent } from '../../../../shared/components/input/input.component';
import { LogoComponent } from '../../../../shared/components/logo/logo.component';
import { AuthCredentials } from '../../models/auth.model';
import { map } from 'rxjs/operators';
import { toSignal } from '@angular/core/rxjs-interop';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    BoxComponent,
    InputComponent,
    LogoComponent,
  ],
  templateUrl: './auth.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthComponent {
  authService = inject(AuthService);
  private route = inject(ActivatedRoute);
  private router = inject(Router);

  private type$ = this.route.data.pipe(map((data) => data['type']));
  type = toSignal(this.type$, { initialValue: 'login' });

  constructor() {
    effect(() => {
      const user = this.authService.user();

      if (user) {
        this.router.navigate(['links']);
      }
    });
  }

  onFormSubmit(credentials: AuthCredentials) {
    if (this.type() === 'login') {
      this.authService.loginAction.next(credentials);
    } else {
      this.authService.registerAction.next(credentials);
    }
  }
}
