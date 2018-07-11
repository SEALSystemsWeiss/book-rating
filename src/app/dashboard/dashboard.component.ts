import { Component, OnInit } from '@angular/core';
import { Book } from '../shared/book';

@Component({
  selector: 'br-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  books: Book[]; // Array<string>

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
    this.books = [{
      isbn: '9389',
      title: 'Angular',
      description: 'BlaBla',
      rating: 2
    },
    {
      isbn: '648732',
      title: 'Angular2',
      description: 'Blubb',
      rating: 1
    },
    {
      isbn: '283740327',
      title: 'Perl',
      description: 'Hicks',
      rating: 4
    }];
  }

}
