import { Component } from '@angular/core';
import { Author } from '../interfaces/author';
import { GetdataService } from '../services/getdata.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-author-list',
  templateUrl: './author-list.component.html',
  styleUrls: ['./author-list.component.css']
})
export class AuthorListComponent {
<<<<<<< HEAD
  cards : Author[] = []

=======
  cards !: any;

  // cards :Author[] =[
  //   {
  //     avatar :'../../assets/images/pic-6.png',
  //     name: 'authorName'
  //    },
  //    {
  //      avatar :'../../assets/images/pic-2.png',
  //      name : 'authorName'
  //     },
  //     {
  //      avatar :'../../assets/images/pic-3.png',
  //      name : 'authorName'
  //     },
  //     {
  //      avatar :'../../assets/images/pic-4.png',
  //      name : 'authorName'
  //     },
  // ]
>>>>>>> 203986a279687601945fe2911e4d4930b5a92341
  constructor(public router: Router,private GetdataService :GetdataService ){}
  ngOnInit(){
    this.  getAllAuthor()
    // this.  getAllAuthorapi()
  }
  redirectDetails(id:any){
    this.router.navigate(['products-dtails',id])
  }
  totalLength:any;
  p:number =1;
  itemsPerPage:number= 5
  getAllAuthor(){
    this.GetdataService.getAllAuthor().subscribe((res:any)=>{
    this.cards = res;
    this.totalLength =res.length;
<<<<<<< HEAD
      
=======

>>>>>>> 203986a279687601945fe2911e4d4930b5a92341
    })


  }
<<<<<<< HEAD

=======
  // getAllAuthorapi(){
  //   this.GetdataService.getAllAuthor().subscribe((res: any) => {
  //     console.log(res.response);
  //   });
  // }
  // pagination code
  // p:number =1;
  // itemsPerPage:number =8;
  // totalAuthor:any;


  // ngOnInit():void{

  // }
>>>>>>> 203986a279687601945fe2911e4d4930b5a92341
}
