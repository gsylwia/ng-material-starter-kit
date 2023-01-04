import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'app-table-names',
  styleUrls: ['./table-names.component.scss'],
  templateUrl: './table-names.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableNamesComponent {
  names = ['Anna', 'Casey', 'Maria', 'Viviene'];
  displayedColumns: any[] = ['#Name'];
}
