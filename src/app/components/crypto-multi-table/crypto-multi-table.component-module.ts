import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { CryptoMultiTableComponent } from './crypto-multi-table.component';

@NgModule({
  imports: [CommonModule, MatTableModule],
  declarations: [CryptoMultiTableComponent],
  providers: [],
  exports: [CryptoMultiTableComponent]
})
export class CryptoMultiTableComponentModule {
}
