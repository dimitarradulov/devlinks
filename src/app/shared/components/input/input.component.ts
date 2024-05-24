import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component, input, signal } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Icon } from '../../models/icons.model';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  template: `
    <div class="relative">
      <img
        ngSrc="../../../../assets/images/icon-{{ icon() }}.svg"
        alt="Icon"
        class="absolute left-4 top-4"
        width="16"
        height="16"
      />
      <input
        class="border border-secondary-85 rounded-lg w-full py-3 pl-11 pr-36 outline-none text-secondary-20 placeholder:text-body-m placeholder:text-secondary-20 placeholder:opacity-50 focus:border-primary-60 focus:shadow-active"
        [ngClass]="{ 'text-danger border-danger': isError() }"
        [type]="type()"
        [placeholder]="placeholder()"
        [value]="value()"
        (change)="onChange($event)"
      />
      <p class="text-danger text-body-s absolute right-4 top-4">
        {{ errorMessage() }}
      </p>
    </div>
  `,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: InputComponent,
      multi: true,
    },
  ],
})
export class InputComponent implements ControlValueAccessor {
  readonly type = input<string>('text');
  readonly placeholder = input<string>('');
  readonly icon = input<Icon>('link');
  readonly isError = input<boolean>(false);
  readonly errorMessage = input<string>('Please check the URL');

  protected readonly value = signal<any>(undefined);

  private _onChange: any;
  private _onTouched: any;

  writeValue(value: unknown): void {
    this.value.set(value);
  }

  registerOnChange(fn: any): void {
    this._onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this._onTouched = fn;
  }

  onChange(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.value.set(target.value);
    this._onChange(this.value());
    this._onTouched();
  }
}
