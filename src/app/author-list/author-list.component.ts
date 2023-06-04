import { Component } from '@angular/core';
import { Author } from '../interfaces/author';
import { GetdataService } from '../services/getdata.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-author-list',
  templateUrl: './author-list.component.html',
  styleUrls: ['./author-list.component.css'],
})
export class AuthorListComponent {
  cards: Author[] = [];

  constructor(public router: Router, private GetdataService: GetdataService) {}
  ngOnInit() {
    this.getAllAuthor();
  }
  redirectDetails(id: any) {
    this.router.navigate(['products-dtails', id]);
  }
  totalLength: any;
  p: number = 1;
  itemsPerPage: number = 5;
  getAllAuthor() {
    this.GetdataService.getAllAuthor().subscribe((res: any) => {
      this.cards = res;
      this.totalLength = res.length;
    });
  }
}
