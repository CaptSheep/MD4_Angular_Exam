import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: "root",
})
export class BookService {
  books = [];
  constructor(private http: HttpClient) {}

  getAll(): Observable<any> {
    return this.http.get(environment.api_url + "books");
  }
  create(data): Observable<any> {
    return this.http.post(environment.api_url + "books", data);
  }
  delete(id): Observable<any> {
    return this.http.delete(environment.api_url + `books/${id}`);
  }
  edit(id, data): Observable<any> {
    return this.http.put(environment.api_url + `books/${id}`, data);
  }
  getById(id): Observable<any> {
    return this.http.get(environment.api_url + `books/${id}`);
  }
}
