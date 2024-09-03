import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Issue } from './issue';
import { BehaviorSubject } from 'rxjs';
import { IssuesService } from 'src/app/services/issues.service';
import { Router } from '@angular/router';

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

  constructor(private issuesService: IssuesService, private router: Router) {}

  ngOnInit(): void {
    this.loadItems();
  }
  

  edit(issue: Issue) {
    this.router.navigate(['/issues', issue._id]);
  }

  create() {
    this.router.navigate(['/issues', 'new']);
  }

  delete(issue: Issue) {
    this.issuesService.deleteItem(issue._id).subscribe(() => {
      this.loadItems();
    })
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
