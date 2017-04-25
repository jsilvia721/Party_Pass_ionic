import { Component } from '@angular/core';
import { NavController, ModalController, ViewController, App} from 'ionic-angular';
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

  parties: any[];
  username = '';
  email = '';

  constructor(public app: App,public nav: NavController, public partyService: Parties, public modalCtrl: ModalController, public viewCtrl: ViewController, private auth: AuthService) {
    this.ionViewDidLoad();
    let info = this.auth.getUserInfo();
    this.username = info['name'];
    this.email = info['email'];

  }

  ionViewDidLoad(){
    this.partyService.getParties().then((data) => {
      this.parties = data;
    });
  }

  itemSelected(party){
    this.nav.push(Modal, {
      party: party
    })
  }

  addParty(){
    let modal = this.modalCtrl.create(Registration);

    modal.onDidDismiss(party => {
      if(party){
        this.parties.push(party);
        this.partyService.createParty(party);
      }
    });

    modal.present();
  }

  deleteParty(party){
    //Remove locally
    this.ionViewDidLoad();

    let index = this.parties.indexOf(party);

    if(index > -1){
      this.parties.splice(index, 1);
    }

    //Remove from database
    this.partyService.deleteParty(party._id);
    this.viewCtrl.dismiss(party);
  }

  public logout() {
    // document.querySelector("ion-tab")['style'].display = 'none';
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
}
