import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-group-text-login',
  styleUrls: ['./group-text-login.component.scss'],
  templateUrl: './group-text-login.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GroupTextLoginComponent {
  readonly form: FormGroup = new FormGroup({
    username: new FormControl(),
    password: new FormControl(),
  });

  constructor(private _loginService: LoginService) {}

  onFormSubmitted(form: FormGroup): void {
    if (!form.valid) {
      return;
    }

    this._loginService
      .create({
        username: form.get('username')?.value,
        password: form.get('password')?.value,
      })
      .subscribe();
  }
}
