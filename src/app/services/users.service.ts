import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UsersModel } from '../models/users.model';

@Injectable({ providedIn: 'root' })
export class UsersService {
  constructor(private _httpClient: HttpClient) {}

  create(user: UsersModel): Observable<void> {
    return this._httpClient.post<void>('https://fakestoreapi.com/users', user);
  }
}
