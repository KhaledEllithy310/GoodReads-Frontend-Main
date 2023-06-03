import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FlagService {

  private flag = new BehaviorSubject(0);
  flagVal = this.flag.asObservable();
  setFlag(newVal: number) {
    this.flag.next(newVal);
  }
}
