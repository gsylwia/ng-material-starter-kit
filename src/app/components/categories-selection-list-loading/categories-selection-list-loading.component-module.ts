import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { CategoriesSelectionListLoadingComponent } from './categories-selection-list-loading.component';

@NgModule({
  imports: [MatCardModule, MatListModule, CommonModule, MatProgressSpinnerModule],
  declarations: [CategoriesSelectionListLoadingComponent],
  providers: [],
  exports: [CategoriesSelectionListLoadingComponent]
})
export class CategoriesSelectionListLoadingComponentModule {
}
