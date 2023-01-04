import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { TableNamesComponent } from './table-names.component';

@NgModule({
  imports: [MatTableModule],
  declarations: [TableNamesComponent],
  providers: [],
  exports: [TableNamesComponent]
})
export class TableNamesComponentModule {
}
