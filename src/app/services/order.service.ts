import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductsModel } from '../models/products.model';
import { CityModel } from '../models/city.model';
import { CountriesModel } from '../models/countries.model';
import { OrderModel } from '../models/order.model';

@Injectable({ providedIn: 'root' })
export class OrderService {
  constructor(private _httpClient: HttpClient) {}

  getAllProducts(): Observable<ProductsModel[]> {
    return this._httpClient.get<ProductsModel[]>(
      'https://636ce2d8ab4814f2b2712854.mockapi.io/products'
    );
  }

  getAllCities(): Observable<CityModel[]> {
    return this._httpClient.get<CityModel[]>(
      'https://636ce2d8ab4814f2b2712854.mockapi.io/cities'
    );
  }

  getAllCountries(): Observable<CountriesModel[]> {
    return this._httpClient.get<CountriesModel[]>(
      'https://636ce2d8ab4814f2b2712854.mockapi.io/countries'
    );
  }

  create(order: OrderModel): Observable<void> {
    return this._httpClient.post<void>('https://fakestoreapi.com/users', order);
  }
}
