import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-control-comment',
  styleUrls: ['./form-control-comment.component.scss'],
  templateUrl: './form-control-comment.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormControlCommentComponent {
  readonly form: FormGroup = new FormGroup({
    text: new FormControl('', 
    [Validators.pattern(/((\w+[ ]){3})+\w{2,}/gm)]),
  });

  onFormSubmitted(form: FormGroup): void {}
}
