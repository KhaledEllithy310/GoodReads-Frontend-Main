import { Component } from '@angular/core';
import { Author } from '../interfaces/author';
import { GetdataService } from '../services/getdata.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-all-authors',
  templateUrl: './all-authors.component.html',
  styleUrls: ['./all-authors.component.css']
})
export class AllAuthorsComponent {

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
  //     {
  //       avatar :'../../assets/images/pic-1.png',
  //       name : 'authorName'
  //      },
  // ]
  cards : Author[] = []
  constructor(public router: Router,private GetdataService :GetdataService ){}
  ngOnInit(){
    this.  getAllAuthor(),
    this.  getAllAuthorapi()
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
      
    })

  
  }
  getAllAuthorapi(){
    this.GetdataService.getAllAuthor().subscribe((res: any) => {
      console.log(res.response);
    });
}

}