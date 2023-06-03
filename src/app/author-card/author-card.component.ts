import { Component,Input ,Output,EventEmitter} from '@angular/core';
import { Author } from './../interfaces/author';
import { Router } from '@angular/router';
@Component({
  selector: 'app-author-card',
  templateUrl: './author-card.component.html',
  styleUrls: ['./author-card.component.css']
})
export class AuthorCardComponent {

  @Input() authorItem !: Author;
  @Output() emitFromChild = new EventEmitter()
  constructor(private router: Router){}
  redirectDetails(id : any){
    this.router.navigate(['author-details'])
    console.log(id);
    // this.emitFromChild.emit(id)
}
}
