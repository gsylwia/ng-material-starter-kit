import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { Observable } from 'rxjs';
import { JobModel } from '../../models/job.model';
import { JobService } from '../../services/job.service';

@Component({
  selector: 'app-job-multi-table',
  styleUrls: ['./job-multi-table.component.scss'],
  templateUrl: './job-multi-table.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class JobMultiTableComponent {
  readonly job$: Observable<JobModel[]> = this._jobService.getAll();
  constructor(private _jobService: JobService) {}
}
