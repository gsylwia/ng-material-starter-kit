import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { UniversitiesModel } from '../../models/universities.model';
import { UniversitiesService } from '../../services/universities.service';

@Component({
  selector: 'app-universities',
  styleUrls: ['./universities.component.scss'],
  templateUrl: './universities.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UniversitiesComponent {
  readonly polishUniversities$: Observable<UniversitiesModel[]> = this._universitiesService.getAll();
  readonly university = new FormControl();

  constructor(private _universitiesService: UniversitiesService) {
  }

  onUniversitiesSubmitted(universities: FormGroup): void {
  }
}
