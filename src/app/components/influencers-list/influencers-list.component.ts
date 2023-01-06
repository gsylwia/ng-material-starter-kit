import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { Observable } from 'rxjs';
import { InfluencersModel } from '../../models/influencers.model';
import { InfluencersService } from '../../services/influencers.service';

@Component({
  selector: 'app-influencers-list',
  styleUrls: ['./influencers-list.component.scss'],
  templateUrl: './influencers-list.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InfluencersListComponent {
  readonly list$: Observable<InfluencersModel[]> =
    this._influencersService.getAll();

  constructor(private _influencersService: InfluencersService) {}
}
