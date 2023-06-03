import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Book } from './../interfaces/book';
import { GetdataService } from './../services/getdata.service';

@Component({
  selector: 'app-book-by-category',
  templateUrl: './book-by-category.component.html',
  styleUrls: ['./book-by-category.component.css']
})
export class BookByCategoryComponent {
  targetBooks!: any;
  BooksOfCategory: Book[] = [];
  constructor(
    private activatedRoute: ActivatedRoute,
    private GetdataService: GetdataService
  ) {}
  ngOnInit() {
    console.log(this.activatedRoute.snapshot.params['id']);
    this.targetBooks = this.BooksOfCategory.find(
      (category) => category.id == this.activatedRoute.snapshot.params['id']
    );
    console.log(this.activatedRoute.snapshot.params['id']);
  }
  totalLength: any;
  p: number = 1;
  itemsPerPage: number = 8;
  getAllBook() {
    this.GetdataService.getAllBook().subscribe((res: any) => {
      this.BooksOfCategory = res.response;
      this.totalLength = res.response.length;
    });
  }
}
