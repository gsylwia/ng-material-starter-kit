import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CryptoListComponent } from './components/crypto-list/crypto-list.component';
import { CategoriesCheckboxComponent } from './components/categories-checkbox/categories-checkbox.component';
import { CryptoListComponentModule } from './components/crypto-list/crypto-list.component-module';
import { CategoriesCheckboxComponentModule } from './components/categories-checkbox/categories-checkbox.component-module';

@NgModule({
  imports: [RouterModule.forRoot([{ path: 'crypto', component: CryptoListComponent }, { path: 'checkbox-categories', component: CategoriesCheckboxComponent }]), CryptoListComponentModule, CategoriesCheckboxComponentModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
