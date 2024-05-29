import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { map } from 'rxjs/operators';
import { toSignal } from '@angular/core/rxjs-interop';

import { BoxComponent } from '../../../../shared/components/box/box.component';
import { InputComponent } from '../../../../shared/components/input/input.component';
import { LogoComponent } from '../../../../shared/components/logo/logo.component';
import { AuthCredentials } from '../../models/auth.model';
import { AuthStore } from '../../data/auth.store';
import { LoadingComponent } from '../../../../shared/components/loading/loading.component';
import { ErrorComponent } from '../../../../shared/components/error/error.component';

@Component({
  selector: 'app-auth',
  standalone: true,
  templateUrl: './auth.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    BoxComponent,
    InputComponent,
    LogoComponent,
    LoadingComponent,
    ErrorComponent,
  ],
})
export class AuthComponent {
  authStore = inject(AuthStore);
  private route = inject(ActivatedRoute);

  private type$ = this.route.data.pipe(map((data) => data['type']));
  type = toSignal(this.type$, { initialValue: 'login' });

  onFormSubmit(credentials: AuthCredentials) {
    if (this.type() === 'login') {
      this.authStore.login(credentials);
    } else {
      this.authStore.register(credentials);
    }
  }
}
