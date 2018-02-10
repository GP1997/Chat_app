import { Component } from '@angular/core';
import {IonicPage, NavController,NavParams } from 'ionic-angular';
import{ AngularFireAuth} from 'angularfire2/auth';
import * as firebase from'firebase';
import{CodePage} from '../code/code';
import{ChatPage} from '../chat/chat';
import{ MyProvider} from '../../providers/my/my';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
phoneNumber:any='';

  constructor(public navCtrl: NavController,public navParams:NavParams,public afAuth:AngularFireAuth,public myService: MyProvider) {
  this.myService.phoneNumber=this.phoneNumber;
  }
sendCode(form){
  this.afAuth.auth.signInWithPhoneNumber(form.value.phoneNumber,new firebase.auth.RecaptchaVerifier('re-container',{'size':'invisible','callback': function(response){}})).then(data=>{this.navCtrl.push('CodePage',{confirmationResult:data})}).catch(err=>{
    console.log(err);
    })
  }
 }
