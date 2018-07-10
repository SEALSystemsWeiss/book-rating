import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'br-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  books: string[]; // Array<string>

  ngOnInit() {
    this.books = ['Angular', 'AngularJS', 'Perl'];
  }

}
