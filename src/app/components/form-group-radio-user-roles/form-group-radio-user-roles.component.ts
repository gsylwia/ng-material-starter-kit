import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { RoleModel } from '../../models/role.model';
import { UserRadioRolesService } from '../../services/user-radio-roles.service';

@Component({
  selector: 'app-form-group-radio-user-roles',
  styleUrls: ['./form-group-radio-user-roles.component.scss'],
  templateUrl: './form-group-radio-user-roles.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormGroupRadioUserRolesComponent {
  readonly user: FormGroup = new FormGroup({
    email: new FormControl(),
    roleId: new FormControl(),
  });
  readonly roles$: Observable<RoleModel[]> =
    this._userRadioRolesService.getAllRoles();

  constructor(private _userRadioRolesService: UserRadioRolesService) {}

  onUserSubmitted(user: FormGroup): void {
    if (!user.valid) {
      return;
    }

    this._userRadioRolesService
      .create({
        email: user.get('email')?.value,
        roleId: user.get('roleId')?.value,
        departmentId: user.get('departmentId')?.value,
        id: user.get('id')?.value,
      })
      .subscribe();
  }
}
