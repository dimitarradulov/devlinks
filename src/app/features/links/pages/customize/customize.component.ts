import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Auth, signOut } from '@angular/fire/auth';

@Component({
  selector: 'app-customize',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './customize.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CustomizeComponent {
  private auth = inject(Auth);

  async signOut() {
    await signOut(this.auth);
  }
}
