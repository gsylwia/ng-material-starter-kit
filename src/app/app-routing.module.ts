import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CryptoListComponent } from './components/crypto-list/crypto-list.component';
import { CategoriesCheckboxComponent } from './components/categories-checkbox/categories-checkbox.component';
import { CategoriesMenuComponent } from './components/categories-menu/categories-menu.component';
import { CryptoRadioComponent } from './components/crypto-radio/crypto-radio.component';
import { HolidaysSelectComponent } from './components/holidays-select/holidays-select.component';
import { CategoriesSelectionListComponent } from './components/categories-selection-list/categories-selection-list.component';
import { TableNamesComponent } from './components/table-names/table-names.component';
import { ListNamesComponent } from './components/list-names/list-names.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { CryptoListComponentModule } from './components/crypto-list/crypto-list.component-module';
import { CategoriesCheckboxComponentModule } from './components/categories-checkbox/categories-checkbox.component-module';
import { CategoriesMenuComponentModule } from './components/categories-menu/categories-menu.component-module';
import { CryptoRadioComponentModule } from './components/crypto-radio/crypto-radio.component-module';
import { HolidaysSelectComponentModule } from './components/holidays-select/holidays-select.component-module';
import { CategoriesSelectionListComponentModule } from './components/categories-selection-list/categories-selection-list.component-module';
import { TableNamesComponentModule } from './components/table-names/table-names.component-module';
import { ListNamesComponentModule } from './components/list-names/list-names.component-module';
import { ProductListComponentModule } from './components/product-list/product-list.component-module';

@NgModule({

  imports: [RouterModule.forRoot([{ path: 'crypto', component: CryptoListComponent }, { path: 'checkbox-categories', component: CategoriesCheckboxComponent }, { path: 'categories-menu', component: CategoriesMenuComponent }, { path: 'crypto-radio', component: CryptoRadioComponent }, { path: 'public-holidays', component: HolidaysSelectComponent }, { path: 'categories', component: CategoriesSelectionListComponent }, { path: 'table-names', component: TableNamesComponent }, { path: 'list-names', component: ListNamesComponent }, { path: 'products', component: ProductListComponent }]), CryptoListComponentModule, CategoriesCheckboxComponentModule, CategoriesMenuComponentModule, CryptoRadioComponentModule, HolidaysSelectComponentModule, CategoriesSelectionListComponentModule, TableNamesComponentModule, ListNamesComponentModule, ProductListComponentModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
