import { Router } from '@angular/router';

import { Book } from './../interfaces/book';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector:'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.css']
})
export class BookCardComponent {
  @Input() bookItem !: Book;
  @Output() emitFromChild = new EventEmitter()
  constructor(private router: Router){}

  redirectDetails(id : number){
    // this.router.navigate(['book-dtails',id])
    console.log(id);
    this.emitFromChild.emit(id)
}
}
