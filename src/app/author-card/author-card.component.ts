import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Author } from './../interfaces/author';
import { Router } from '@angular/router';
@Component({
  selector: 'app-author-card',
  templateUrl: './author-card.component.html',
  styleUrls: ['./author-card.component.css'],
})
export class AuthorCardComponent {
  @Input() card!: any;
  @Output() emitFromChild = new EventEmitter();

  constructor(private router: Router) {}

  //REDIRECT TO AUTHOR DETAILES PAGE
  redirectDetails(id: any) {
    this.router.navigate(['author-details', id]);
    console.log(this.card.avatar);
    // this.emitFromChild.emit(id)
  }
}
