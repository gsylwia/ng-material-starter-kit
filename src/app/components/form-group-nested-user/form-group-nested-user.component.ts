import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-form-group-nested-user',
  styleUrls: ['./form-group-nested-user.component.scss'],
  templateUrl: './form-group-nested-user.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormGroupNestedUserComponent {

  readonly name: FormGroup = new FormGroup({
    firstname: new FormControl(),
    lastname: new FormControl(),
  });

  readonly geolocation: FormGroup = new FormGroup({
    lat: new FormControl(),
    long: new FormControl(),
  });

  readonly address: FormGroup = new FormGroup({
    city: new FormControl(),
    street: new FormControl(),
    number: new FormControl(),
    zipcode: new FormControl(),
    geolocation: this.geolocation,
  });

  readonly userForm: FormGroup = new FormGroup({
    email: new FormControl(),
    username: new FormControl(),
    password: new FormControl(),
    name: this.name,
    address: this.address,
    phone: new FormControl(),
  });

  constructor(private _usersService: UsersService) {}

  onUserFormSubmitted(userForm: FormGroup): void {
    this._usersService
      .create({
        id: userForm.get('id')?.value,
        email: userForm.get('email')?.value,
        username: userForm.get('username')?.value,
        password: userForm.get('password')?.value,
        name: userForm.get('name')?.value,
        address: userForm.get('address')?.value,
        phone: userForm.get('phone')?.value,
      })
      .subscribe();
  }
}
