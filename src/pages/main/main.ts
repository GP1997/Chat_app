import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ChatPage} from '../chat/chat';
import {ContactsPage} from '../contacts/contacts';
import {ProfilePage} from '../profile/profile';
import { AlertController } from 'ionic-angular';
/**
 * Generated class for the MainPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-main',
  templateUrl: 'main.html'
})
export class MainPage {
  username:string='';
  constructor(public navCtrl: NavController, public navParams: NavParams,private alertCtrl:AlertController) {
  }
  showalert(title:string,message:string) {
    let alertBox = this.alertCtrl.create({
      title: title,
      subTitle: message,
      buttons: ['Ok']
    });
    alertBox.present();
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad MainPage');
  }
  loginUser(){
    if(/^[a-zA-Z0-9]+$/.test(this.username))
    {
this.navCtrl.push(ChatPage,{
username:this.username})
    }
      else{
        this.showalert('Error','Invalid Username dont bluff me')

      }
    }}
  