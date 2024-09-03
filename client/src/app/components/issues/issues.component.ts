import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Issue } from './issue';
import { BehaviorSubject } from 'rxjs';
import { IssuesService } from 'src/app/services/issues.service';

@Component({
  selector: 'app-issues',
  templateUrl: './issues.component.html',
  styleUrls: ['./issues.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IssuesComponent {
  isLoading$ = new BehaviorSubject(true);
  dataSource = new MatTableDataSource<Issue>([]);
  totalDocuments$ = new BehaviorSubject(0);

  constructor(private issuesService: IssuesService) {}

  ngOnInit(): void {
    this.loadItems();
  }
  

  edit(item: Issue) {
  }

  create() {
  }

  delete(item: Issue) {
    debugger
  }

  onPageChange(event: any) {
    this.loadItems(event.pageIndex);
  }


  private loadItems(page?: number) {
    this.isLoading$.next(true);
    this.issuesService.getItems(page).subscribe(res => {
      this.dataSource.data = res.docs
      this.totalDocuments$.next(res.totalDocs);
      this.isLoading$.next(false);
    })
  }
}
