import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserGenderModel } from '../models/user-gender.model';

@Injectable({ providedIn: 'root' })
export class UsersGenderService {
  constructor(private _httpClient: HttpClient) {}

  create(user: UserGenderModel): Observable<void> {
    return this._httpClient.post<void>(
      'https://63a2f6579704d18da081945f.mockapi.io/users',
      user
    );
  }
}
