import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { RoleModel } from '../../models/role.model';
import { RolesService } from '../../services/roles.service';

@Component({
  selector: 'app-form-control-user-roles',
  styleUrls: ['./form-control-user-roles.component.scss'],
  templateUrl: './form-control-user-roles.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormControlUserRolesComponent {
  readonly userRole: FormControl = new FormControl();
  readonly roles$: Observable<RoleModel[]> = this._rolesService.getAll();

  constructor(private _rolesService: RolesService) {}
}
