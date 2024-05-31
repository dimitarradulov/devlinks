import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [CommonModule],
  template: `<p>not-found works!</p>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NotFoundComponent {}
