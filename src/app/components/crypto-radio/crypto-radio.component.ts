import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { CryptoModel } from '../../models/crypto.model';
import { CryptoService } from '../../services/crypto.service';

@Component({
  selector: 'app-crypto-radio',
  styleUrls: ['./crypto-radio.component.scss'],
  templateUrl: './crypto-radio.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CryptoRadioComponent {
  readonly list$: Observable<CryptoModel[]> = this._cryptoService.getAll();

  constructor(private _cryptoService: CryptoService) {
  }
}
