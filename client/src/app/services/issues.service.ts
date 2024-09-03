import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Issue } from '../components/issues/issue';
import { Observable } from 'rxjs';
import { PaginateResult } from '../models/paginate-result.model';

@Injectable({
  providedIn: 'root'
})
export class IssuesService {
  private apiUrl = 'http://localhost:5000';

  constructor(private http: HttpClient) {}

  createItem(issue: Partial<Issue>): Observable<Issue> {
    return this.http.post<Issue>(`${this.apiUrl}/api/issues`, issue);
  }

  getItem(id: string): Observable<Issue> {
    return this.http.get<Issue>(`${this.apiUrl}/api/issues/${id}`);
  }

  getItems(page: number = 0): Observable<PaginateResult<Issue>> {
    return this.http.get<PaginateResult<Issue>>(`${this.apiUrl}/api/issues?page=${page}`);
  }

  updateItem(id: string, item: Partial<Issue>): Observable<Issue> {
    return this.http.put<Issue>(`${this.apiUrl}/api/issues/${id}`, item);
  }

  deleteItem(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/api/issues/${id}`);
  }
}
