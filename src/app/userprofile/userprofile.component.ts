import { Component } from '@angular/core';
import { Userdata } from '../interfaces/userdata';
import { UserdataService } from '../services/userdata.service';
import { GetdataService } from '../services/getdata.service';
import { TokenserviceService } from '../services/tokenservice.service';

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent {
user!:Userdata;
userId!:any;
constructor(private token: TokenserviceService,private req:GetdataService){}
ngOnInit(){
  this.userId = this.token.getId();
this.req.getUserData(this.userId).subscribe((res:any)=>this.user=res)
}
delete(id: any) {
  // let book = { status: 'want to read' };
  // let id = '646f1252abe949de877eec4d';
  // this.http.delete(`http://localhost:8080/users/${id}`).subscribe(
  //   (res) => console.log(res),
  //   (err) => console.error(err)
  // );
  // window.location.reload();
  // this.http.put(`http://localhost:3000/userbooks/${id}`, book).subscribe(
  //   (res) => console.log(res),
  //   (err) => console.error(err)
  // );
}

onSelected(id: any, value: any) {
  // console.log(value);
  // let book = { firstName: value };
  // this.http.put(`http://localhost:3000/users/${id}`, book).subscribe(
  //   (res) => console.log(res),
  //   (err) => console.error(err)
  // );
  // window.location.reload();
}

update(id: any) {
  // console.log('giiiiiiiiu');

  // const selectElement = this.mySelect.nativeElement;
  // const selectedOption = selectElement.options[selectElement.selectedIndex];
  // const selectedValue = selectedOption.value;
  // console.log(selectedValue);
  // let book = { firstName: selectedValue };
  // this.http.put(`http://localhost:3000/users/${id}`, book).subscribe(
  //   (res) => console.log(res),
  //   (err) => console.error(err)
  // );
  // window.location.reload();
}
}
