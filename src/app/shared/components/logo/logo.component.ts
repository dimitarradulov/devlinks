import { NgClass } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
} from '@angular/core';

@Component({
  selector: 'app-logo',
  standalone: true,
  imports: [NgClass],
  template: `
    <img
      draggable="false"
      src="../../../../assets/images/logo-devlinks-{{ size() }}.svg"
      alt="Logo"
      [width]="dimensions().width"
      [height]="dimensions().height"
      [ngClass]="className()"
    />
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LogoComponent {
  readonly size = input<'small' | 'large'>('large');
  readonly priority = input(false, {
    transform: (value: boolean | string) =>
      typeof value === 'string' ? value === '' : value,
  });
  readonly className = input<string>();

  protected readonly dimensions = computed<Record<'width' | 'height', string>>(
    () => {
      return this.size() === 'small'
        ? { width: '32', height: '32' }
        : { width: '183', height: '40' };
    },
  );
}
