import { Component } from '@angular/core';
import {ActivatedRoute, Router}  from '@angular/router'; 
import { Route } from '@angular/router';
import { NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent {
  currentRate = 0;
  constructor(config: NgbRatingConfig) {
		config.max = 5;
		config.readonly = true;
	}
}
