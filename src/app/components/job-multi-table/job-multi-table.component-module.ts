import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { JobMultiTableComponent } from './job-multi-table.component';

@NgModule({
  imports: [CommonModule, MatTableModule],
  declarations: [JobMultiTableComponent],
  providers: [],
  exports: [JobMultiTableComponent]
})
export class JobMultiTableComponentModule {
}
