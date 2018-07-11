import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookComponent } from './book.component';
import { BookRatingService } from '../shared/book-rating.service';

describe('BookComponent', () => {
  let component: BookComponent;
  let fixture: ComponentFixture<BookComponent>;

  // smalllest possible Mock
  const ratingMock = {
    rateUp: () => { }
  };

  beforeEach(async(() => {

    spyOn(ratingMock, 'rateUp');
    // spyOn(ratingMock, 'rateUp').and.callThrough();
    // spyOn(ratingMock, 'rateUp').and.returnValue(42);

    TestBed.configureTestingModule({
      declarations: [BookComponent],
      providers: [{
        provide: BookRatingService,
        useValue: ratingMock
      }]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookComponent);
    component = fixture.componentInstance;

    component.book = {
      isbn: '00',
      title: '',
      description: '',
      rating: 1
    };

    fixture.detectChanges();
  });

  it('should forward the rateUp call to the servcie', () => {
    component.rateUp();
    expect(ratingMock.rateUp).toHaveBeenCalled();
  });
});
