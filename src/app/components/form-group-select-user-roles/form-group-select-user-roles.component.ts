import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { RoleModel } from '../../models/role.model';
import { UserRolesService } from '../../services/user-roles.service';

@Component({
  selector: 'app-form-group-select-user-roles',
  styleUrls: ['./form-group-select-user-roles.component.scss'],
  templateUrl: './form-group-select-user-roles.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormGroupSelectUserRolesComponent {
  readonly userRolesForm: FormGroup = new FormGroup({
    email: new FormControl(),
    roleId: new FormControl(),
  });
  readonly user$: Observable<RoleModel[]> =
    this._userRolesService.getAllRoles();

  constructor(private _userRolesService: UserRolesService) {}

  onUserRolesFormSubmitted(userRolesForm: FormGroup): void {
    if (!userRolesForm.valid) {
      return;
    }

    this._userRolesService
      .create({
        email: userRolesForm.get('email')?.value,
        roleId: userRolesForm.get('roleId')?.value,
        departmentId: userRolesForm.get('departmentId')?.value,
        id: userRolesForm.get('id')?.value,
      })
      .subscribe();
  }
}
