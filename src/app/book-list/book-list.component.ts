import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { GetdataService } from '../services/getdata.service';
import { Book } from './../interfaces/book';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent {

  books : Book[] = [] 
  constructor(public router: Router,private GetdataService :GetdataService ){}
  ngOnInit(){
    this.getAllBook(),
    this.getAllBookapi()
  }
 
  totalLength:any;
  p:number =1;
  itemsPerPage:number= 8
  getAllBook(){
    this.GetdataService.getAllBook().subscribe((res:any)=>{
    this.books = res.response;
    this.totalLength =res.response.length;
      
    })

  
  }
  getAllBookapi(){
    this.GetdataService.getAllBook().subscribe((res: any) => {
      console.log(res.response);
    });
  }
 
  
}
