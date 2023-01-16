import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { MatRadioModule } from '@angular/material/radio';
import { FormGroupNestedOrderComponent } from './form-group-nested-order.component';

@NgModule({
  imports: [ReactiveFormsModule, MatFormFieldModule, MatInputModule, CommonModule, MatButtonModule, MatSelectModule, MatOptionModule, MatRadioModule],
  declarations: [FormGroupNestedOrderComponent],
  providers: [],
  exports: [FormGroupNestedOrderComponent]
})
export class FormGroupNestedOrderComponentModule {
}
