import { Component, ElementRef, ViewChild } from '@angular/core';
import { UpdateService } from '../services/update.service';
import { DeleteService } from '../services/delete.service';
import { AddService } from '../services/add.service';
import { GetdataService } from '../services/getdata.service';

@Component({
  selector: 'app-admin-author',
  templateUrl: './admin-author.component.html',
  styleUrls: ['./admin-author.component.css'],
})
export class AdminAuthorComponent {
  authors!: any[];
  // data!: Author;
  idAuthor!: number;
  constructor(
    private updateService: UpdateService,
    private deleteService: DeleteService,
    private addService: AddService,
    private getdataService: GetdataService
  ) {}
  //
  @ViewChild('addfileInput', { static: false }) addfileInput!: ElementRef;
  @ViewChild('updatefileInput', { static: false }) updatefileInput!: ElementRef;
  ngOnInit() {
    this.getAllAuthor();
  }

  //GET ALL AUTHORS
  getAllAuthor() {
    this.getdataService
      .getAllAuthor()
      .subscribe((res: any) => (this.authors = res));
  }
  //Create Author
  first_name: any;
  last_name: any;
  dateOfBirth: any;
  avatar: any;

  createAuthor() {
    const avatar = this.addfileInput.nativeElement.files[0];
    console.log('avatar', avatar);

    const formData = new FormData();
    formData.set('first_name', this.first_name);
    formData.set('last_name', this.last_name);
    formData.set('dateOfBirth', this.dateOfBirth);
    formData.append('avatar', avatar);
    console.log(avatar);

    this.addService.createAuthor(formData).subscribe((res) => console.log(res));
    window.location.reload();
  }

  deleteAuthor(index: any) {
    let Author = document.getElementById(`cate${index}`);
    Author?.remove();
    let idAuthor = this.authors[index]._id;
    this.deleteService
      .deleteAuthor(idAuthor)
      .subscribe((res) => console.log(res));
    console.log(this.authors);
    window.location.reload();
  }

  //GET THE ID OF THE OBJECT
  getIdAuthor(idAuthor: any) {
    this.idAuthor = idAuthor;
  }

  first_name_updated: any;
  last_name_updated: any;
  dateOfBirth_updated: any;
  avatar_updated: any;

  updateAuthor(idAuthor: any) {
    const avatar_updated = this.updatefileInput.nativeElement.files[0];
    console.log(this.first_name_updated);
    const formData = new FormData();
    formData.set('first_name', this.first_name_updated);
    formData.set('last_name', this.last_name_updated);
    formData.set('dateOfBirth', this.dateOfBirth_updated);
    formData.set('avatar', avatar_updated);
    this.updateService
      .updateAuthor(idAuthor, formData)
      .subscribe((res) => console.log(res));
    window.location.reload();
  }
}
