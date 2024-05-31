import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';

import { LogoComponent } from '../../../../shared/components/logo/logo.component';
import { IsMobileViewportService } from '../../../../shared/services/is-mobile-viewport.service';
import { TabComponent } from '../tab/tab.component';
import { IconComponent } from '../../../../shared/components/icon/icon.component';
import { NavContainerComponent } from '../nav-container/nav-container.component';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [IsMobileViewportService],
  imports: [
    CommonModule,
    RouterModule,
    LogoComponent,
    TabComponent,
    IconComponent,
    NavContainerComponent,
  ],
})
export class HeaderComponent {
  isMobileViewport = inject(IsMobileViewportService).isMobileViewport;
}
