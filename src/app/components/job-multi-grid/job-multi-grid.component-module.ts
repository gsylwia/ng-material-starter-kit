import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { JobMultiGridComponent } from './job-multi-grid.component';

@NgModule({
  imports: [MatGridListModule, CommonModule, MatCardModule],
  declarations: [JobMultiGridComponent],
  providers: [],
  exports: [JobMultiGridComponent]
})
export class JobMultiGridComponentModule {
}
