import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import{ AngularFireModule,FirebaseAppConfig} from 'angularfire2';
import{ AngularFireAuthModule} from 'angularfire2/auth';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import{CodePageModule} from'../pages/code/code.module';
import {ChatPage} from '../pages/chat/chat';
import {ContactsPage} from '../pages/contacts/contacts';
import {ProfilePage} from '../pages/profile/profile';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { MyProvider } from '../providers/my/my';
import { Camera } from '@ionic-native/camera';
import firebase from 'firebase';

const firebaseConfig:FirebaseAppConfig={
 
}
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ChatPage,
    ContactsPage,
    ProfilePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    CodePageModule,
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ChatPage,
    ContactsPage,
    ProfilePage
  ],
  providers: [
    Camera,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    MyProvider
  ]
})
export class AppModule {}
