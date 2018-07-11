import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Book } from '../shared/book';
import { BookRatingService } from '../shared/book-rating.service';

@Component({
  selector: 'br-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent {


  // fixes cross side error from chrome
  @Input() book: Book = {} as Book;
  @Output() rate = new EventEmitter<Book>(true);


  constructor(private rs: BookRatingService) {
  }

  rateUp() {
    const rateBook = this.rs.rateUp(this.book);
    this.rate.emit(rateBook);
    this.book = rateBook;
  }

  rateDown() {
    const rateBook = this.rs.rateDown(this.book);
    this.rate.emit(rateBook);
    this.book = rateBook;
  }
}
