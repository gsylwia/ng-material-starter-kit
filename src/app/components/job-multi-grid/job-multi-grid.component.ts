import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { JobModel } from '../../models/job.model';
import { JobService } from '../../services/job.service';

@Component({
  selector: 'app-job-multi-grid',
  styleUrls: ['./job-multi-grid.component.scss'],
  templateUrl: './job-multi-grid.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class JobMultiGridComponent {
  readonly list$: Observable<JobModel[]> = this._jobService.getAll();

  constructor(private _jobService: JobService) {
  }
}
