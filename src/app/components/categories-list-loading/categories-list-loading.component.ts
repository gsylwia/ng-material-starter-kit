import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { map, Observable } from 'rxjs';
import { CategoriesModel } from '../../models/categories.model';
import { CategoriesService } from '../../services/categories.service';

@Component({
  selector: 'app-categories-list-loading',
  styleUrls: ['./categories-list-loading.component.scss'],
  templateUrl: './categories-list-loading.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CategoriesListLoadingComponent {
  readonly category$: Observable<CategoriesModel[]> = this._categoriesService
    .getAll()
    .pipe(map(() => []));

  constructor(private _categoriesService: CategoriesService) {}
}
