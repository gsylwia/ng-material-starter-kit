import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { ProductsMultiTableComponent } from './products-multi-table.component';

@NgModule({
  imports: [MatCardModule, CommonModule, MatTableModule],
  declarations: [ProductsMultiTableComponent],
  providers: [],
  exports: [ProductsMultiTableComponent]
})
export class ProductsMultiTableComponentModule {
}
