import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IssuesComponent } from './components/issues/issues.component';
import { IssueFormComponent } from './components/issues/issue-form/issue-form.component';

const routes: Routes = [
  { path: '', redirectTo: 'issues', pathMatch: 'full' },
  { path: 'issues', component: IssuesComponent },
  { path: 'issues/new', component: IssueFormComponent },
  { path: 'issues/:id', component: IssueFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
