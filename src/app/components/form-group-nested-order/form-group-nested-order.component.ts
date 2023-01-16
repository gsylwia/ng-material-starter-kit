import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { ProductsModel } from '../../models/products.model';
import { CityModel } from '../../models/city.model';
import { CountriesModel } from '../../models/countries.model';
import { OrderService } from '../../services/order.service';

@Component({
  selector: 'app-form-group-nested-order',
  styleUrls: ['./form-group-nested-order.component.scss'],
  templateUrl: './form-group-nested-order.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormGroupNestedOrderComponent {
  readonly shipping: FormGroup = new FormGroup({
    houseNumber: new FormControl(),
    zipCode: new FormControl(),
    city: new FormControl(),
    deliveryTime: new FormControl(),
  });

  readonly invoice: FormGroup = new FormGroup({
    addressLine: new FormControl(),
    extraAddressLine: new FormControl(),
    vatNumber: new FormControl(),
    country: new FormControl(),
  });

  readonly orderForm: FormGroup = new FormGroup({
    product: new FormControl(),
    quantity: new FormControl(),
    shipping: this.shipping,
    invoice: this.invoice,
  });

  readonly products$: Observable<ProductsModel[]> =
    this._orderService.getAllProducts();

  quantity$: Observable<string[]> = of(['1', '2', '3', '4', '5']);
  deliveryTime$: Observable<string[]> = of(['8-13', '13-18', '19-23']);

  readonly cities$: Observable<CityModel[]> = this._orderService.getAllCities();
  readonly countries$: Observable<CountriesModel[]> =
    this._orderService.getAllCountries();

  constructor(private _orderService: OrderService) {}

  onOrderFormSubmitted(orderForm: FormGroup): void {
    if (!orderForm.valid) {
      return;
    }

    this._orderService
      .create({
        product: orderForm.get('product')?.value,
        quantity: orderForm.get('quantity')?.value,
        shipping: orderForm.get('shipping')?.value,
        invoice: orderForm.get('invoice')?.value,
      })
      .subscribe();
  }

  onShippingSubmitted(shipping: FormGroup): void {}

  onInvoiceSubmitted(invoice: FormGroup): void {}
}
