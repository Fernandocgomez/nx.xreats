import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputTextControlComponent } from './form-controls/components/input-text-control/input-text-control.component';

@NgModule({
  imports: [CommonModule],
  declarations: [InputTextControlComponent],
  exports: [InputTextControlComponent],
})
export class UiFormsModule {}
