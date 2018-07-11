import { BookRatingService } from './book-rating.service';
import { Book } from './book';

fdescribe('BookRatingService', () => {

  let service: BookRatingService;
  let book: Book;

  beforeEach(() => {
    service  = new BookRatingService();
    book = {
      isbn: '000',
      title: 'Test Book',
      description: 'ABC',
      rating: 3 // we start with 3!!!!
      };
    });

    it('should always return a new book', () => {
      const rateBook = service.rateUp(book);
      expect(rateBook).not.toBe(book);
    });

    it('should rate up a new book', () => {
      const rateBook = service .rateUp(book);
      expect(rateBook.rating).toBe(4);
    });

    it('should rate down a new book', () => {
      const rateBook = service .rateDown(book);
      expect(rateBook.rating).toBe(2);
    });

    it('should not be allowed to have a rating greater than 5', () => {
      book.rating = 5;
      const rateBook = service.rateUp(book);
      expect(rateBook.rating).toBe(5);
    });

    it('should not be allowed to have a rating less than 1', () => {
      book.rating = 1;
      const rateBook = service.rateDown(book);
      expect(rateBook.rating).toBe(1);
    });

 });
