import { Component } from '@angular/core';
import {ActivatedRoute, Router}  from '@angular/router'; 
import { Route } from '@angular/router';
@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent {
  constructor(private activatedRoute: ActivatedRoute, private router: Router) {}
  // targetBook :  =any[]
  // ngOnInit() {
  //   console.log(this.activatedRoute.snapshot.params['id']);
  //   this.targetBook = this.products.find(
  //     (product) => product.id == this.activatedRoute.snapshot.params['id']
  //   );
  // }
       
}
