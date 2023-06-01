import { Component } from '@angular/core';
import { ElementRef, ViewChild } from '@angular/core';
import { UpdateService } from '../services/update.service';
import { DeleteService } from '../services/delete.service';
import { AddService } from '../services/add.service';
import { GetdataService } from '../services/getdata.service';

@Component({
  selector: 'app-admin-book',
  templateUrl: './admin-book.component.html',
  styleUrls: ['./admin-book.component.css'],
})
export class AdminBookComponent {
  Books!: any[];
  authors!: any[];
  categories!: any[];
  idBook!: number;

  @ViewChild('addfileInput', { static: false }) addfileInput!: ElementRef;
  @ViewChild('updatefileInput', { static: false }) updatefileInput!: ElementRef;
  constructor(
    private updateService: UpdateService,
    private deleteService: DeleteService,
    private addService: AddService,
    private getdataService: GetdataService
  ) {}

  ngOnInit() {
    this.getAllBook();
    this.getAllAuthor();
    this.getAllCategory();
  }

  //GET ALL AUTHORS
  getAllAuthor() {
    this.getdataService
      .getAllAuthor()
      .subscribe((res: any) => (this.authors = res));
    // .subscribe((res: any) => console.log(res));
  }

  //GET ALL CATEGORIES
  getAllCategory() {
    this.getdataService
      .getAllCategory()
      // .subscribe((res: any) => console.log(res));
      .subscribe((res: any) => (this.categories = res));
  }

  //GET ALL BOOKS
  getAllBook() {
    this.getdataService
      .getAllBook()
      .subscribe((res: any) => (this.Books = res.response));
    // this.booksService.getAllBook().subscribe((res: any) => (this.Books = res));
    this.getdataService.getAllBook().subscribe((res: any) => console.log(res));
  }

  //GET ID CATEGORY {INDEX+1}
  getIdGategory(name: any) {
    let IdCategory = this.categories.findIndex((elm) => (elm.name = name));
    console.log('Books:', this.Books);
    console.log('categories:', this.categories);
    console.log('name:', name);
    console.log('index+1 :', IdCategory);
    return IdCategory;
  }

  //CREATE BOOK
  title: any;
  description: any;
  categoryId: any;
  authorId: any;
  avatar: any;

  createBook() {
    const avatar = this.addfileInput.nativeElement.files[0];
    console.log('avatar', avatar);
    const formData = new FormData();
    formData.set('title', this.title);
    formData.set('description', this.description);
    formData.set('categoryId', this.categoryId);
    formData.set('authorId', this.authorId);
    formData.append('avatar', avatar);
    console.log(avatar);

    this.addService.createBook(formData).subscribe((res) => console.log(res));
    // this.getAllBook();
    // console.log(data);
    window.location.reload();
  }

  //DELETE THE SELECTED BOOK
  deleteBook(index: any) {
    let Book = document.getElementById(`cate${index}`);
    Book?.remove();
    let idBook = this.Books[index]._id;
    this.deleteService.deleteBook(idBook).subscribe((res) => console.log(res));
    console.log(this.Books);
    window.location.reload();
  }

  //GET THE ID OF THE OBJECT
  getIdBook(idBook: any) {
    this.idBook = idBook;
  }

  //UPDATE BOOK
  title_updated: any;
  description_updated: any;
  categoryId_updated: any;
  authorId_updated: any;
  avatar_updated: any;

  updateBook(idBook: any) {
    const avatar_updated = this.updatefileInput.nativeElement.files[0];
    const formData = new FormData();
    formData.set('title_updated', this.title_updated);
    formData.set('description_updated', this.description_updated);
    formData.set('categoryId_updated', this.categoryId_updated);
    formData.set('authorId_updated', this.authorId_updated);
    if (avatar_updated) {
      formData.set('avatar', avatar_updated);
    }
    console.log('title_updated', this.title_updated);
    console.log('description_updated', this.description_updated);
    console.log('categoryId_updated', this.categoryId_updated);
    console.log('authorId_updated', this.authorId_updated);

    console.log(formData);
    this.updateService
      .updateBook(idBook, formData)
      .subscribe((res) => console.log(res));
    // window.location.reload();
  }
}
