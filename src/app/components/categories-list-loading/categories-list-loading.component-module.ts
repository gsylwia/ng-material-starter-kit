import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { CategoriesListLoadingComponent } from './categories-list-loading.component';

@NgModule({
  imports: [MatCardModule, MatCheckboxModule, CommonModule, MatProgressSpinnerModule],
  declarations: [CategoriesListLoadingComponent],
  providers: [],
  exports: [CategoriesListLoadingComponent]
})
export class CategoriesListLoadingComponentModule {
}
