import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { map, Observable } from 'rxjs';
import { HolidaysModel } from '../../models/holidays.model';
import { HolidaysService } from '../../services/holidays.service';

@Component({
  selector: 'app-holidays-loading',
  styleUrls: ['./holidays-loading.component.scss'],
  templateUrl: './holidays-loading.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HolidaysLoadingComponent {
  readonly holiday$: Observable<HolidaysModel[]> =
    this._holidaysService.getAll();
  // .pipe(map(() => []));

  constructor(private _holidaysService: HolidaysService) {}
}
