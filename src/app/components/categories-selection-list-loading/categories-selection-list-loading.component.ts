import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { map, Observable } from 'rxjs';
import { CategoriesModel } from '../../models/categories.model';
import { CategoriesService } from '../../services/categories.service';

@Component({
  selector: 'app-categories-selection-list-loading',
  styleUrls: ['./categories-selection-list-loading.component.scss'],
  templateUrl: './categories-selection-list-loading.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CategoriesSelectionListLoadingComponent {
  readonly list$: Observable<CategoriesModel[]> = this._categoriesService
    .getAll()
    .pipe(map(() => []));

  constructor(private _categoriesService: CategoriesService) {}
}
