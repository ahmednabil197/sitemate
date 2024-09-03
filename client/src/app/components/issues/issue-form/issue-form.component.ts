import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IssuesService } from 'src/app/services/issues.service';
import { Issue } from '../issue';

@Component({
  selector: 'app-issue-form',
  templateUrl: './issue-form.component.html',
  styleUrls: ['./issue-form.component.scss']
})
export class IssueFormComponent {
  issueForm!: FormGroup;
  issueId: string | null = null;
  isEditMode = false;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private issuesService: IssuesService
  ) {}

  ngOnInit(): void {
    this.issueId = this.route.snapshot.paramMap.get('id');
    this.isEditMode = !!this.issueId; // True if issueId is present
    this.initializeForm();

    if (this.isEditMode) {
      this.loadIssue();
    }
  }

  initializeForm(): void {
    this.issueForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required]
    });
  }

  loadIssue(): void {
    if (this.issueId) {
      this.issuesService.getItem(this.issueId).subscribe((issue: Issue) => {
        this.issueForm.patchValue({
          title: issue.title,
          description: issue.description
        });
      });
    }
  }

  onSubmit(): void {
    if (this.issueForm.valid) {
      if (this.isEditMode) {
        const updatedIssue: Partial<Issue> = this.issueForm.value;
        this.issuesService.updateItem(this.issueId!, updatedIssue).subscribe(() => {
          this.router.navigate(['/issues']); // Adjust the navigation path as needed
        });
      } else {
        const newIssue: Partial<Issue> = this.issueForm.value;
        this.issuesService.createItem(newIssue).subscribe(() => {
          this.router.navigate(['/issues']); // Adjust the navigation path as needed
        });
      }
    }
  }

  onCancel(): void {
    this.router.navigate(['/issues']); // Adjust the navigation path as needed
  }
}
