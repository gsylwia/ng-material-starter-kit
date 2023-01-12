import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { FormControlUserRolesComponent } from './form-control-user-roles.component';

@NgModule({
  imports: [MatFormFieldModule, MatSelectModule, ReactiveFormsModule, MatOptionModule, CommonModule],
  declarations: [FormControlUserRolesComponent],
  providers: [],
  exports: [FormControlUserRolesComponent]
})
export class FormControlUserRolesComponentModule {
}
