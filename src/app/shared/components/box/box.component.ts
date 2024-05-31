import { NgClass } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
} from '@angular/core';
import { twMerge } from 'tailwind-merge';

@Component({
  selector: 'app-box',
  standalone: true,
  imports: [NgClass],
  template: `
    <article [ngClass]="cssClasses()">
      <ng-content />
    </article>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BoxComponent {
  readonly className = input<string>();

  protected readonly cssClasses = computed(() =>
    twMerge('bg-white rounded-xl p-6 sm:p-10', this.className()),
  );
}
