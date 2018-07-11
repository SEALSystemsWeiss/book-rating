import { Injectable } from '@angular/core';
import { Book } from './book';


@Injectable({
  providedIn: 'root'
})
export class BookRatingService {

  private minRating = 1;
  private maxRating = 5;

// Lösungsansatz: https://angular.schule/blog/2018-03-pure-immutable-operations
rateUp(book: Book): Book {
  return {
    ...book,
    rating: Math.min(book.rating + 1, this.maxRating)
  };

}

rateDown(book: Book): Book {
  return {
    ...book,
    rating: Math.max(book.rating - 1, this.minRating)
    // rating: book.rating > this.minRating ? book.rating -1 : book.rating
  };
}

  constructor() { }
}
