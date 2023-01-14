import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { MatCardModule } from '@angular/material/card';
import { FormGroupSelectUserRolesComponent } from './form-group-select-user-roles.component';

@NgModule({
  imports: [ReactiveFormsModule, MatFormFieldModule, MatInputModule, CommonModule, MatButtonModule, MatSelectModule, MatOptionModule, MatCardModule],
  declarations: [FormGroupSelectUserRolesComponent],
  providers: [],
  exports: [FormGroupSelectUserRolesComponent]
})
export class FormGroupSelectUserRolesComponentModule {
}
