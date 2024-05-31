import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
} from '@angular/core';

import { Icon } from '../../models/icons.model';
import { SvgIconComponent } from 'angular-svg-icon';
import { twMerge } from 'tailwind-merge';

@Component({
  selector: 'app-icon',
  standalone: true,
  imports: [SvgIconComponent],
  template: `
    <svg-icon
      src="../../../../assets/images/icon-{{ icon() }}.svg"
      [svgClass]="cssClasses()"
    />
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconComponent {
  readonly icon = input.required<Icon>();
  readonly className = input<string>();

  protected readonly cssClasses = computed(() =>
    twMerge('w-4 h-4', this.className()),
  );
}
