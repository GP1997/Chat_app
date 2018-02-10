import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as firebase from 'firebase';
import{ MainPage } from'../main/main';


@IonicPage()
@Component({
  selector: 'page-code',
  templateUrl: 'code.html',
})
export class CodePage {
verificationId;
  confirmationResult;
code:any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.confirmationResult=this.navParams.get('confirmationResult');
  }
verifyCode(form){
const credential=firebase.auth.PhoneAuthProvider.credential(this.confirmationResult.verificationId,form.value.code)
firebase.auth().signInWithCredential(credential).then(user=>{
console.log(user);
this.navCtrl.push('MainPage');
}).catch(err=>{
  console.log(err);
})
}
}
