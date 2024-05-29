import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  inject,
  input,
} from '@angular/core';
import { NgxSpinnerComponent, NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-loading',
  standalone: true,
  imports: [NgxSpinnerComponent],
  template: `
    <ngx-spinner type="ball-spin-fade" color="#fff" size="medium">
      <p class="text-white">{{ loadingMessage() }}</p>
    </ngx-spinner>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoadingComponent implements OnInit {
  private spinner = inject(NgxSpinnerService);

  readonly loadingMessage = input<string>('Loading...');

  ngOnInit(): void {
    this.spinner.show();
  }
}
