import { Component } from '@angular/core';
import { Author } from '../interfaces/author';
@Component({
  selector: 'app-author-list',
  templateUrl: './author-list.component.html',
  styleUrls: ['./author-list.component.css']
})
export class AuthorListComponent {

  cards :Author[] =[
    {
     image :'../../assets/images/pic-6.png',
     name: 'authorName'
    },
    {
      image :'../../assets/images/pic-2.png',
      name : 'authorName'
     },
     {
      image :'../../assets/images/pic-3.png',
      name : 'authorName'
     },
     {
      image :'../../assets/images/pic-4.png',
      name : 'authorName'
     },
   
  ]

  // pagination code
  // p:number =1;
  // itemsPerPage:number =8;
  // totalAuthor:any;

  // 
  // ngOnInit():void{
  
  // }
}
