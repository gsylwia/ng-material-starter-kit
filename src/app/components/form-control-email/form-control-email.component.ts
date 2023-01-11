import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-control-email',
  styleUrls: ['./form-control-email.component.scss'],
  templateUrl: './form-control-email.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormControlEmailComponent {
  readonly form: FormGroup = new FormGroup({
    email: new FormControl('', [
      Validators.pattern('[a-zA-Z0-9]+@+[a-zA-Z0-9]+.+[a-zA-Z]$'),
    ]),
  });

  onFormSubmitted(form: FormGroup): void {}
}
