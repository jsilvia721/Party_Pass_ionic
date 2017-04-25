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
import { HttpModule } from '@angular/http';
import { GoogleMaps } from '@ionic-native/google-maps';
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
    Edit
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
    Autocomplete
  ],
  providers: [
    StatusBar,
    SplashScreen,
    GoogleMaps,
    Parties,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
