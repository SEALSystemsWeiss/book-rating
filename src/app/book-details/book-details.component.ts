import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/internal/operators/map';

@Component({
  selector: 'br-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent implements OnInit {

  // isbn: string;
  isbn$: Observable<string>;



  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    // statisch, snapshot schaltet navigation aus.
    // this.isbn = this.route.snapshot.paramMap.get('isbn');

    // this.route.paramMap.subscribe(params => this.isbn = params.get('isbn'));

    // Alt!!! neu paramMap
    /* this.isbn$ = this.route.params.pipe(
      map(params => params.isbn)
    ); */

    // neu paramMap
    this.isbn$ = this.route.paramMap.pipe(
      map(paramMap => paramMap.get('isbn'))
    );

  }

}
