import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatChipsModule } from '@angular/material/chips';
import { InfluencersListComponent } from './influencers-list.component';

@NgModule({
  imports: [MatCardModule, MatListModule, CommonModule, MatChipsModule],
  declarations: [InfluencersListComponent],
  providers: [],
  exports: [InfluencersListComponent]
})
export class InfluencersListComponentModule {
}
