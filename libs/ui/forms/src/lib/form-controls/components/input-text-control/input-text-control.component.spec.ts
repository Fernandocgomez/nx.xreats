import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputTextControlComponent } from './input-text-control.component';

describe('InputTextControlComponent', () => {
  let component: InputTextControlComponent;
  let fixture: ComponentFixture<InputTextControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InputTextControlComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(InputTextControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
