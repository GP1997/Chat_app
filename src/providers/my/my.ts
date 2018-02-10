import { Injectable } from '@angular/core';
@Injectable()
export class MyProvider {
phoneNumber:any;
  constructor() {
    console.log(this.phoneNumber);
  }

}