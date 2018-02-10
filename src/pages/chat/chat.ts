import { Component,ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import{AngularFireDatabase} from 'angularfire2/database';
import{HomePage} from '../home/home';
import{ ContactsPage} from '../contacts/contacts';
import{ProfilePage} from '../profile/profile';
import { MenuController } from 'ionic-angular';
import { Content } from 'ionic-angular';
import{MyProvider} from '../../providers/my/my';
import { ViewController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import firebase from 'firebase';

/**
 * Generated class for the ChatPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html',
})
export class ChatPage {
  @ViewChild(Content) content: Content;
username:string='';
message:string='';
phone:any='';
_chatSubscription;
captureDataUrl: string;
messages:object []=[];
  constructor(public navCtrl: NavController, public navParams: NavParams,public db:AngularFireDatabase,public myService :MyProvider,public viewCtrl: ViewController,private camera: Camera) {

    this.username=this.navParams.get('username');
  this._chatSubscription=this.db.list('/chat').valueChanges().subscribe( data=>{
   this.messages=data;
  });
  }
sendMessage()
{
  this.db.list('/chat').push({
    username:this.username,
    message:this.message
  }).then(() =>{}
  //message is sent
)
this.content.scrollToBottom(200);
  this.message='';
}
  ionViewWillLeave() {
    console.log('user is about to go');
    this._chatSubscription.unsubscribe();
    this.db.list('/chat').push({
      specialMessage:true,
      message:`${this.username} has left the Chat`
    })
  }
  ionViewDidLoad()
  {
    console.log(this.myService.phoneNumber);
    this.content.scrollToBottom(200);
this.db.list('/chat').push({
  specialMessage:true,
  message:`${this.username} has joined the Chat`
})
this.viewCtrl.showBackButton(false);
  }
  contact()
  {
    this.navCtrl.push(ContactsPage);
  }
  profile()
  {
    this.navCtrl.push(ProfilePage);
  }
  back()
  {
    this.navCtrl.pop();
  }
  capture()
  {
    const options: CameraOptions = {
      quality: 50,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }
    
    this.camera.getPicture(options).then((imageData) => {
     let captureDataUrl = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
     // Handle error
    });
    let storageRef = firebase.storage().ref();
    // Create a timestamp as filename
    const filename = Math.floor(Date.now() / 1000);

    // Create a reference to 'images/todays-date.jpg'
    const imageRef = storageRef.child(`images/${filename}.jpg`);

    imageRef.putString(this.captureDataUrl, firebase.storage.StringFormat.DATA_URL).then((snapshot)=> {
     // Do something here when the data is succesfully uploaded!
    });

  }
}