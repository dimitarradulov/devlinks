import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-box',
  standalone: true,
  imports: [NgClass],
  template: `
    <article class="bg-white rounded-xl p-10" [ngClass]="className()">
      <ng-content />
    </article>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BoxComponent {
  readonly className = input<string>();
}
