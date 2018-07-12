import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Book } from './book';
import { filter, retry, catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class BookStoreService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Book[]> {
    return this.http.get<Book[]>('http://api.angular.schule/books')
      .pipe(
        retry(3),
        catchError(() => of([{
          isbn: '000',
          title: 'test on error',
          description: 'Sorry',
          rating: 5
        }]))
      );
  }
}
