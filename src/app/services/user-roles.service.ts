import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserRolesModel } from '../models/user-roles.model';
import { RoleModel } from '../models/role.model';

@Injectable({ providedIn: 'root' })
export class UserRolesService {
  constructor(private _httpClient: HttpClient) {}

  getAll(): Observable<UserRolesModel[]> {
    return this._httpClient.get<UserRolesModel[]>(
      'https://636ce2d8ab4814f2b2712854.mockapi.io/user'
    );
  }

  create(user: UserRolesModel): Observable<void> {
    return this._httpClient.post<void>(
      'https://636ce2d8ab4814f2b2712854.mockapi.io/roles',
      user
    );
  }

  getAllRoles(): Observable<RoleModel[]> {
    return this._httpClient.get<RoleModel[]>(
      'https://636ce2d8ab4814f2b2712854.mockapi.io/roles'
    );
  }
}
