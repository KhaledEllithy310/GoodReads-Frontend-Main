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

  redirectDetails(id : any){console.log(id);
    this.router.navigate(['book-details',id])

    // this.emitFromChild.emit(id)
}
}
