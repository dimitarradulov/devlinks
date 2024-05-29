import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Auth, signOut } from '@angular/fire/auth';

import { LoadingComponent } from '../../../../shared/components/loading/loading.component';

@Component({
  selector: 'app-customize',
  standalone: true,
  templateUrl: './customize.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, LoadingComponent],
})
export class CustomizeComponent {
  private auth = inject(Auth);

  async signOut() {
    await signOut(this.auth);
  }
}
