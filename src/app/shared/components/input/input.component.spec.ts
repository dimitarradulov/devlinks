import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { InputComponent } from './input.component';

describe('InputComponent', () => {
  let component: InputComponent;
  let fixture: ComponentFixture<InputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsModule, InputComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the input component', () => {
    expect(component).toBeTruthy();
  });

  it('should render the input element', () => {
    const inputElement = fixture.nativeElement.querySelector('input');
    expect(inputElement).toBeTruthy();
  });

  it('should bind the value property to the input element', () => {
    component.writeValue('Test Value');
    fixture.detectChanges();
    const inputElement = fixture.nativeElement.querySelector('input');
    expect(inputElement.value).toBe('Test Value');
  });

  it('should call the onChange method when the input value changes', () => {
    spyOn(component, 'onChange');
    const inputElement = fixture.nativeElement.querySelector('input');
    inputElement.value = 'New Value';
    inputElement.dispatchEvent(new Event('change'));
    expect(component.onChange).toHaveBeenCalled();
  });

  it('should display the error message when isError is true', () => {
    const errorMsg = 'Please check the URL';
    fixture.componentRef.setInput('isError', true);
    fixture.componentRef.setInput('errorMessage', errorMsg);
    fixture.detectChanges();
    const errorMessageElement =
      fixture.nativeElement.querySelector('p.text-danger');
    expect(errorMessageElement.textContent.trim()).toBe(errorMsg);
  });
});
