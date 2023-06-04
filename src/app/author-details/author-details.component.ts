import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GetdataService } from '../services/getdata.service';

@Component({
  selector: 'app-author-details',
  templateUrl: './author-details.component.html',
  styleUrls: ['./author-details.component.css'],
})
export class AuthorDetailsComponent {
  targetAuthor!: any;
  authors!: any[];
  constructor(
    private activatedRoute: ActivatedRoute,
    private getdataService: GetdataService,private router: Router
  ) {}
  ngOnInit() {
    console.log(this.activatedRoute.snapshot.params['id']);
    //Call The Target Author
    this.getTargetAuthor();
    //Call The All Author
    this.getAllAuthor();
  }

  //Call All Authors And Display The Target Author
  getTargetAuthor() {
    this.getdataService
      .getAllAuthor()
      .subscribe(
        (res: any) =>
          (this.targetAuthor = res.filter(
            (elem: any) =>
              elem._id == this.activatedRoute.snapshot.params['id'],
            console.log(res),
            console.log(this.targetAuthor)
          ))
      );
  }

  //GET ALL AUTHORS
  getAllAuthor() {
    this.getdataService
      .getAllAuthor()
      .subscribe((res: any) => (this.authors = res));
  }

  //REDIRECT TO AUTHOR DETAILES PAGE
  redirectDetails(id: any) {
    this.router.navigate(['author-details', id]);
  }
}
