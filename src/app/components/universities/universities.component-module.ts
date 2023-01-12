import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { UniversitiesComponent } from './universities.component';

@NgModule({
  imports: [ReactiveFormsModule, MatFormFieldModule, MatRadioModule, CommonModule, MatCardModule, MatInputModule, MatButtonModule],
  declarations: [UniversitiesComponent],
  providers: [],
  exports: [UniversitiesComponent]
})
export class UniversitiesComponentModule {
}
