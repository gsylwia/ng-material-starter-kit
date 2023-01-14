import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatRadioModule } from '@angular/material/radio';
import { FormGroupRadioUserRolesComponent } from './form-group-radio-user-roles.component';

@NgModule({
  imports: [ReactiveFormsModule, MatFormFieldModule, MatInputModule, CommonModule, MatButtonModule, MatCardModule, MatRadioModule],
  declarations: [FormGroupRadioUserRolesComponent],
  providers: [],
  exports: [FormGroupRadioUserRolesComponent]
})
export class FormGroupRadioUserRolesComponentModule {
}
