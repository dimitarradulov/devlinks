import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { RouterModule } from '@angular/router';

import { IconComponent } from '../../../../shared/components/icon/icon.component';
import { Icon } from '../../../../shared/models/icons.model';

@Component({
  selector: 'app-tab',
  standalone: true,
  imports: [RouterModule, IconComponent],
  templateUrl: './tab.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TabComponent {
  linkPath = input.required<string | any[]>();
  icon = input.required<Icon>();
  label = input<string>();
}
