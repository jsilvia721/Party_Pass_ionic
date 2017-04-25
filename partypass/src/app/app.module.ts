import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { Modal } from '../pages/modal/modal';
import { Registration } from '../pages/registration/registration';
import { Edit } from '../pages/edit/edit'
import { Parties } from '../providers/parties'
import { Autocomplete } from '../pages/autocomplete/autocomplete';
import { AuthService } from './../providers/auth-service';
import { Register } from '../pages/register/register';
import { Login } from '../pages/login/login';
import { Http, Headers, HttpModule } from '@angular/http';
import {
 GoogleMaps,
 GoogleMap,
 GoogleMapsEvent,
 LatLng,
 CameraPosition,
 MarkerOptions,
 Marker
} from '@ionic-native/google-maps';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    HomePage,
    TabsPage,
    Modal,
    Registration,
    Autocomplete,
    Edit,
    Register,
    Login
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    HomePage,
    TabsPage,
    Modal,
    Registration,
    Edit,
    Autocomplete,
    Register,
    Login
  ],
  providers: [
    StatusBar,
    SplashScreen,
    GoogleMaps,
    Parties,
    AuthService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
