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
import { CryptoListLoadingComponent } from './components/crypto-list-loading/crypto-list-loading.component';
import { CategoriesListLoadingComponent } from './components/categories-list-loading/categories-list-loading.component';
import { CategoriesSelectionListLoadingComponent } from './components/categories-selection-list-loading/categories-selection-list-loading.component';
import { HolidaysLoadingComponent } from './components/holidays-loading/holidays-loading.component';
import { ProductsMultiListComponent } from './components/products-multi-list/products-multi-list.component';
import { ProductsMultiTableComponent } from './components/products-multi-table/products-multi-table.component';
import { CryptoMultiTableComponent } from './components/crypto-multi-table/crypto-multi-table.component';
import { JobMultiTableComponent } from './components/job-multi-table/job-multi-table.component';
import { JobMultiGridComponent } from './components/job-multi-grid/job-multi-grid.component';
import { InfluencersListComponent } from './components/influencers-list/influencers-list.component';
import { FormControlNameComponent } from './components/form-control-name/form-control-name.component';
import { FormControlAgeComponent } from './components/form-control-age/form-control-age.component';
import { FormControlEmailComponent } from './components/form-control-email/form-control-email.component';
import { FormControlCommentComponent } from './components/form-control-comment/form-control-comment.component';
import { UniversitiesComponent } from './components/universities/universities.component';
import { FormControlUserRolesComponent } from './components/form-control-user-roles/form-control-user-roles.component';
import { GroupTextLoginComponent } from './components/group-text-login/group-text-login.component';
import { FormGroupSelectProductComponent } from './components/form-group-select-product/form-group-select-product.component';
import { FormGroupSelectUserRolesComponent } from './components/form-group-select-user-roles/form-group-select-user-roles.component';
import { FormGroupRadioUserRolesComponent } from './components/form-group-radio-user-roles/form-group-radio-user-roles.component';
import { FormGroupRadioUserGenderComponent } from './components/form-group-radio-user-gender/form-group-radio-user-gender.component';
import { FormGroupNestedUserComponent } from './components/form-group-nested-user/form-group-nested-user.component';
import { FormGroupNestedOrderComponent } from './components/form-group-nested-order/form-group-nested-order.component';
import { CryptoListComponentModule } from './components/crypto-list/crypto-list.component-module';
import { CategoriesCheckboxComponentModule } from './components/categories-checkbox/categories-checkbox.component-module';
import { CategoriesMenuComponentModule } from './components/categories-menu/categories-menu.component-module';
import { CryptoRadioComponentModule } from './components/crypto-radio/crypto-radio.component-module';
import { HolidaysSelectComponentModule } from './components/holidays-select/holidays-select.component-module';
import { CategoriesSelectionListComponentModule } from './components/categories-selection-list/categories-selection-list.component-module';
import { TableNamesComponentModule } from './components/table-names/table-names.component-module';
import { ListNamesComponentModule } from './components/list-names/list-names.component-module';
import { ProductListComponentModule } from './components/product-list/product-list.component-module';
import { CryptoListLoadingComponentModule } from './components/crypto-list-loading/crypto-list-loading.component-module';
import { CategoriesListLoadingComponentModule } from './components/categories-list-loading/categories-list-loading.component-module';
import { CategoriesSelectionListLoadingComponentModule } from './components/categories-selection-list-loading/categories-selection-list-loading.component-module';
import { HolidaysLoadingComponentModule } from './components/holidays-loading/holidays-loading.component-module';
import { ProductsMultiListComponentModule } from './components/products-multi-list/products-multi-list.component-module';
import { ProductsMultiTableComponentModule } from './components/products-multi-table/products-multi-table.component-module';
import { CryptoMultiTableComponentModule } from './components/crypto-multi-table/crypto-multi-table.component-module';
import { JobMultiTableComponentModule } from './components/job-multi-table/job-multi-table.component-module';
import { JobMultiGridComponentModule } from './components/job-multi-grid/job-multi-grid.component-module';
import { InfluencersListComponentModule } from './components/influencers-list/influencers-list.component-module';
import { FormControlNameComponentModule } from './components/form-control-name/form-control-name.component-module';
import { FormControlAgeComponentModule } from './components/form-control-age/form-control-age.component-module';
import { FormControlEmailComponentModule } from './components/form-control-email/form-control-email.component-module';
import { FormControlCommentComponentModule } from './components/form-control-comment/form-control-comment.component-module';
import { UniversitiesComponentModule } from './components/universities/universities.component-module';
import { FormControlUserRolesComponentModule } from './components/form-control-user-roles/form-control-user-roles.component-module';
import { GroupTextLoginComponentModule } from './components/group-text-login/group-text-login.component-module';
import { FormGroupSelectProductComponentModule } from './components/form-group-select-product/form-group-select-product.component-module';
import { FormGroupSelectUserRolesComponentModule } from './components/form-group-select-user-roles/form-group-select-user-roles.component-module';
import { FormGroupRadioUserRolesComponentModule } from './components/form-group-radio-user-roles/form-group-radio-user-roles.component-module';
import { FormGroupRadioUserGenderComponentModule } from './components/form-group-radio-user-gender/form-group-radio-user-gender.component-module';
import { FormGroupNestedUserComponentModule } from './components/form-group-nested-user/form-group-nested-user.component-module';
import { FormGroupNestedOrderComponentModule } from './components/form-group-nested-order/form-group-nested-order.component-module';

@NgModule({


  imports: [RouterModule.forRoot([{ path: 'crypto', component: CryptoListComponent }, { path: 'checkbox-categories', component: CategoriesCheckboxComponent }, { path: 'categories-menu', component: CategoriesMenuComponent }, { path: 'crypto-radio', component: CryptoRadioComponent }, { path: 'public-holidays', component: HolidaysSelectComponent }, { path: 'categories', component: CategoriesSelectionListComponent }, { path: 'table-names', component: TableNamesComponent }, { path: 'list-names', component: ListNamesComponent }, { path: 'products', component: ProductListComponent }, { path: 'crypto-loading', component: CryptoListLoadingComponent }, { path: 'categories-checkbox-loading', component: CategoriesListLoadingComponent }, { path: 'categories-loading', component: CategoriesSelectionListLoadingComponent }, { path: 'holidays-loading', component: HolidaysLoadingComponent }, { path: 'list-1-multi-list-products', component: ProductsMultiListComponent }, { path: 'product-search', component: ProductsMultiTableComponent }, { path: 'crypto-table', component: CryptoMultiTableComponent }, { path: 'job-post-table', component: JobMultiTableComponent }, { path: 'grid-list-job', component: JobMultiGridComponent }, { path: 'influencers', component: InfluencersListComponent }, { path: 'form-1-control-name', component: FormControlNameComponent }, { path: 'form-1-control-age', component: FormControlAgeComponent }, { path: 'form-1-control-email', component: FormControlEmailComponent }, { path: 'form-1-control-comment', component: FormControlCommentComponent }, { path: 'form-1-control-radio-universities', component: UniversitiesComponent }, { path: 'form-1-control-select-user-roles', component: FormControlUserRolesComponent }, { path: 'login', component: GroupTextLoginComponent }, { path: 'form-1-group-select-product', component: FormGroupSelectProductComponent }, { path: 'register-with-role', component: FormGroupSelectUserRolesComponent }, { path: 'form-group-radio', component: FormGroupRadioUserRolesComponent }, { path: 'form-1-group-radio-user', component: FormGroupRadioUserGenderComponent }, { path: 'form-1-gruop-nested-user', component: FormGroupNestedUserComponent }, { path: 'form-1-group-nested-order', component: FormGroupNestedOrderComponent }]), CryptoListComponentModule, CategoriesCheckboxComponentModule, CategoriesMenuComponentModule, CryptoRadioComponentModule, HolidaysSelectComponentModule, CategoriesSelectionListComponentModule, TableNamesComponentModule, ListNamesComponentModule, ProductListComponentModule, CryptoListLoadingComponentModule, CategoriesListLoadingComponentModule, CategoriesSelectionListLoadingComponentModule, HolidaysLoadingComponentModule, ProductsMultiListComponentModule, ProductsMultiTableComponentModule, CryptoMultiTableComponentModule, JobMultiTableComponentModule, JobMultiGridComponentModule, InfluencersListComponentModule, FormControlNameComponentModule, FormControlAgeComponentModule, FormControlEmailComponentModule, FormControlCommentComponentModule, UniversitiesComponentModule, FormControlUserRolesComponentModule, GroupTextLoginComponentModule, FormGroupSelectProductComponentModule, FormGroupSelectUserRolesComponentModule, FormGroupRadioUserRolesComponentModule, FormGroupRadioUserGenderComponentModule, FormGroupNestedUserComponentModule, FormGroupNestedOrderComponentModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
