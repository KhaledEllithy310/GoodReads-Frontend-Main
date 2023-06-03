import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { GetdataService } from '../services/getdata.service';
import { Book } from '../interfaces/book';

@Component({
  selector: 'app-all-books',
  templateUrl: './all-books.component.html',
  styleUrls: ['./all-books.component.css']
})
export class AllBooksComponent {
  
  books : Book[] = []
  constructor(public router: Router,private GetdataService :GetdataService ){}
  ngOnInit(){
    this.getAllBook()

  }
 
  totalLength:any;
  p:number =1;
  itemsPerPage:number= 8
  getAllBook(){
    this.GetdataService.getAllBook().subscribe((res:any)=>{
    this.books = res.response;
    this.totalLength =res.response.length;

    })

  
}}
