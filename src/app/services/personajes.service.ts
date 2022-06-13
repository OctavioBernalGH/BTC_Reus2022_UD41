import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PersonajesService {
  getAll() {
    throw new Error('Method not implemented.');
  }
  deleteAll() {
    throw new Error('Method not implemented.');
  }

  apiUrl: string = "localhost:3000/characters";
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient) { }

  list(): Observable<any>{
    return this.http.get(this.apiUrl).pipe(
      catchError(this.handleError)
      );
  }

  getItem(id:any): Observable<any>{
    return this.http.get(this.apiUrl).pipe(
      catchError(this.handleError)
    );
  }

  create(data: any): Observable<any> {
    return this.http.post(this.apiUrl, data).pipe(
      catchError(this.handleError)
    );
  }

  // Edit/ Update
  update(id: any, data: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, data).pipe(
      catchError(this.handleError)
    );
  }

  // Delete
  delete(id: any): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`).pipe(
      catchError(this.handleError)
    );
  }

  // Search By Name
  filterByTitle(title: any): Observable<any> {
    return this.http.get(`${this.apiUrl}?title_like=${title}`).pipe(
      catchError(this.handleError)
    );
  }

    // Handle API errors
    handleError(error: HttpErrorResponse) {
      if (error.error instanceof ErrorEvent) {
        console.error('An error occurred:', error.error.message);
      } else {
        console.error(
          `Backend returned code ${error.status}, ` +
          `body was: ${error.error}`);
      }
      return throwError(
        'Something bad happened; please try again later.');
    };
}
