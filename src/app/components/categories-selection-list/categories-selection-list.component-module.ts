import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { CategoriesSelectionListComponent } from './categories-selection-list.component';

@NgModule({
  imports: [MatListModule, CommonModule, MatCardModule],
  declarations: [CategoriesSelectionListComponent],
  providers: [],
  exports: [CategoriesSelectionListComponent]
})
export class CategoriesSelectionListComponentModule {
}
