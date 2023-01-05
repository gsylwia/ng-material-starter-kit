import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { ProductsMultiListComponent } from './products-multi-list.component';

@NgModule({
  imports: [MatCardModule, MatListModule, CommonModule],
  declarations: [ProductsMultiListComponent],
  providers: [],
  exports: [ProductsMultiListComponent]
})
export class ProductsMultiListComponentModule {
}
