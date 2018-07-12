import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Book } from '../shared/book';
import { BookStoreService } from '../shared/book-store.service';

@Component({
  selector: 'br-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardComponent implements OnInit {

  books: Book[] = []; // Array<string>

  constructor(private bs: BookStoreService) { }

  reorderBooks(book: Book) {
    console.log('Zur Info:', book);
    this.books = this.books
      .map(b => b.isbn === book.isbn ? book : b)
      .sort((a, b) => b.rating - a.rating);


    /* // Option
    const cleanedlist = this.books.filter(b=> b.isbn !== book.isbn);
    this.books = [...cleanedlist, book]
    .sort((a,b) => b.rating - a.rating); */
  }

  ngOnInit() {
    this.bs.getAll().subscribe(books => this.books = books);
  }

  addBook(book: Book) {
    this.books = [...this.books, book];
  }

}
