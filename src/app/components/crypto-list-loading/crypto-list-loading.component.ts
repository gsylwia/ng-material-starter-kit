import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { map, Observable } from 'rxjs';
import { CryptoModel } from '../../models/crypto.model';
import { CryptoService } from '../../services/crypto.service';

@Component({
  selector: 'app-crypto-list-loading',
  styleUrls: ['./crypto-list-loading.component.scss'],
  templateUrl: './crypto-list-loading.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CryptoListLoadingComponent {
  readonly list$: Observable<CryptoModel[]> = this._cryptoService
    .getAll()
    .pipe(map(() => []));
  constructor(private _cryptoService: CryptoService) {}
}
