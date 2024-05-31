import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-nav-container',
  standalone: true,
  template: `
    <nav>
      <ul class="flex">
        <ng-content></ng-content>
      </ul>
    </nav>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavContainerComponent {}
