import { CanActivate, CanActivateFn, Router } from '@angular/router';
import { FlagService } from '../services/flag.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TokenserviceService } from '../services/tokenservice.service';
import { GetdataService } from '../services/getdata.service';
import { async } from 'rxjs';
@Injectable()
export class AdminGuard implements CanActivate {
  constructor(
    private data: TokenserviceService,
    private flag: FlagService,
    private router: Router,
    private req: GetdataService
  ) {}

  canActivate(): any {
    this.getData();
  }
  async getData(): Promise<any> {
    try {
      const info = this.data.getStoredData();
      let x: any;
      if (info != null) {
        let id = info[0].id;
        let TOKEN = info[0].token;
        const data ={
          token : TOKEN
        }
        const res = await this.req.getUserData(id).toPromise();
        const res2 = await this.req.authData(data).toPromise();
        x = res;
        if (x.role === true && res2===true) {
          return true;
        } else {
          this.router.navigate(['headerpage']);
          return false;
        }
      } else {
        this.router.navigate(['headerpage']);
        return false;
      }
    } catch (error) {
      console.log(error);
    }
  }
}
