import { NgModule } from '@angular/core';
import { ListNamesComponent } from './list-names.component';
import { MatTableModule } from '@angular/material/table';
import { AsyncPipe, NgForOf, NgIf } from '@angular/common';
import { MatListModule } from '@angular/material/list';

@NgModule({
  imports: [MatTableModule, NgForOf, MatListModule, AsyncPipe, NgIf],
  declarations: [ListNamesComponent],
  providers: [],
  exports: [ListNamesComponent],
})
export class ListNamesComponentModule {}
