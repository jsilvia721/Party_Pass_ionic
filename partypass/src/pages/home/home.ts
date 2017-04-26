import { Component } from '@angular/core';
import { NavController, ModalController, ViewController, App, LoadingController, Loading} from 'ionic-angular';
import { Modal } from '../modal/modal';
import { Registration } from '../registration/registration'
import { Parties } from '../../providers/parties';
import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { AuthService } from '../../providers/auth-service';
import { Login } from '../login/login';
import { AppModule } from './app.module';
import 'rxjs/add/operator/map';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  parties: any;
  username = '';
  email = '';
  loading: Loading;
  constructor(public app: App,public nav: NavController, public partyService: Parties, public modalCtrl: ModalController, public viewCtrl: ViewController, private auth: AuthService, private loadingCtrl: LoadingController) {
    // this.username = info;
    // this.email = info['email'];
    let info = this.auth.getUserInfo();
    this.username = info['name'];
    this.email = info['email'];

  }

  ionViewWillEnter(){
    console.log("after delete party!");
    this.partyService.getParties().then((data) => {
      this.parties = data;
      console.log("Data");
      console.log(data);
    });
  }

  itemSelected(party){
    let parties = this.parties;
    this.nav.push(Modal, {
      party: party,
      parties: parties
    })
  }

  addParty(){
    let modal = this.modalCtrl.create(Registration);

    modal.onDidDismiss(party => {
      if(party){
        this.partyService.createParty(party).then((info) =>{
          console.log(info);
          this.partyService.getParties().then((data) => {
            this.parties = data;
            console.log("save parties home");
            console.log(this.parties);
          });
        });
      }
    });

    modal.present();
  }

  deleteParty(party){
    //Remove from database
    this.partyService.deleteParty(party._id).then((info)=>{
      console.log(info);
      this.partyService.getParties().then((data) => {
        console.log("save parties home");
        this.nav.pop();
      });
    });
  }

  public logout() {
    // document.querySelector("ion-tab")['style'].display = 'none';
    this.showLoading();
    this.auth.logout();

    // Now I'll access the root NavController for the app,
    // and use that to reset the nav stack

    // Now I'll access the root NavController for the app,
    // and use that to reset the nav stack

    const root = this.app.getRootNav();
    root.popToRoot();
    // this.auth.logout().subscribe(succ => {
    //   this.nav.setRoot(Login);
    //   this.nav.popToRoot();
    // });
  }
  showLoading() {
    this.loading = this.loadingCtrl.create({
      content: 'Please wait...',
      dismissOnPageChange: true
    });
    this.loading.present();
  }
}
