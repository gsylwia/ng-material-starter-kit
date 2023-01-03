import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { HolidaysSelectComponent } from './holidays-select.component';

@NgModule({
  imports: [MatFormFieldModule, MatSelectModule, ReactiveFormsModule, MatOptionModule, CommonModule],
  declarations: [HolidaysSelectComponent],
  providers: [],
  exports: [HolidaysSelectComponent]
})
export class HolidaysSelectComponentModule {
}
