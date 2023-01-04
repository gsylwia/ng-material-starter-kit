import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatStepperModule } from '@angular/material/stepper';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { CryptoListLoadingComponent } from './crypto-list-loading.component';

@NgModule({
  imports: [MatCardModule, MatChipsModule, CommonModule, MatStepperModule, MatButtonModule, MatProgressSpinnerModule],
  declarations: [CryptoListLoadingComponent],
  providers: [],
  exports: [CryptoListLoadingComponent]
})
export class CryptoListLoadingComponentModule {
}
