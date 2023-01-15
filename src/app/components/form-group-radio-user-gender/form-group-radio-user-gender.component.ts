import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { UsersGenderService } from '../../services/users-gender.service';

@Component({
  selector: 'app-form-group-radio-user-gender',
  styleUrls: ['./form-group-radio-user-gender.component.scss'],
  templateUrl: './form-group-radio-user-gender.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormGroupRadioUserGenderComponent {
  readonly users: FormGroup = new FormGroup({
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    gender: new FormControl('', [Validators.required]),
  });

  item$: Observable<string[]> = of(['male', 'female']);

  constructor(private _usersGenderService: UsersGenderService) {}

  onUsersSubmitted(users: FormGroup): void {
    if (!users.valid) {
      return;
    }

    this._usersGenderService
      .create({
        firstName: users.get('firstName')?.value,
        lastName: users.get('lastName')?.value,
        gender: users.get('gender')?.value,
      })
      .subscribe();
  }
}
