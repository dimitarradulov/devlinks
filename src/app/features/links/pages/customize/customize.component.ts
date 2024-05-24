import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-customize',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './customize.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CustomizeComponent { }
