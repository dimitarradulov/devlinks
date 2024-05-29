import { NgClass, NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-error',
  standalone: true,
  imports: [NgOptimizedImage, NgClass],
  template: `
    <article
      class="rounded-lg bg-danger-75 text-secondary-20 p-4 flex items-center gap-2"
      [ngClass]="className()"
    >
      <img
        ngSrc="../../../../assets/images/icon-error.svg"
        alt="Error"
        width="36"
        height="36"
      />
      <span>{{ message() }}</span>
    </article>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ErrorComponent {
  readonly message = input.required<string>();
  readonly className = input<string>();
}
