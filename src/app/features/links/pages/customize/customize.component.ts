import { CommonModule, NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Auth, signOut } from '@angular/fire/auth';

import { LoadingComponent } from '../../../../shared/components/loading/loading.component';
import { BoxComponent } from '../../../../shared/components/box/box.component';
import { IconComponent } from '../../../../shared/components/icon/icon.component';

@Component({
  selector: 'app-customize',
  standalone: true,
  templateUrl: './customize.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    CommonModule,
    LoadingComponent,
    BoxComponent,
    IconComponent,
    NgOptimizedImage,
  ],
})
export class CustomizeComponent {
  private auth = inject(Auth);

  async signOut() {
    await signOut(this.auth);
  }
}
