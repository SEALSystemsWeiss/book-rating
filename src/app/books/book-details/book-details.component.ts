import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/internal/operators/map';
import { BookStoreService } from '../shared/book-store.service';
import { Book } from '../shared/book';
import { switchMap, retry } from 'rxjs/operators';

@Component({
  selector: 'br-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent implements OnInit {

  // isbn: string;
  // isbn$: Observable<string>;
  book$: Observable<Book>;



  constructor(private route: ActivatedRoute, private bs: BookStoreService) { }

  ngOnInit() {
    // statisch, snapshot schaltet navigation aus.
    // this.isbn = this.route.snapshot.paramMap.get('isbn');

    // this.route.paramMap.subscribe(params => this.isbn = params.get('isbn'));

    // Alt!!! neu paramMap
    /* this.isbn$ = this.route.params.pipe(
      map(params => params.isbn)
    ); */

    // neu paramMap  as String
    /* this.isbn$ = this.route.paramMap.pipe(
      map(paramMap => paramMap.get('isbn'))
    ); */


    // neuer als Observable<book>
    this.book$ = this.route.paramMap.pipe(
      map(paramMap => paramMap.get('isbn')),
      switchMap(isbn => this.bs.get(isbn)),
      retry(3)
    );

  }

}
