import { Component } from '@angular/core';
import { NavController, ModalController, ViewController } from 'ionic-angular';
import { Modal } from '../modal/modal';
import { Registration } from '../registration/registration'
import { Parties } from '../../providers/parties';
import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { AuthService } from '../../providers/auth-service';
import 'rxjs/add/operator/map';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

	parties: any[];
	username = '';
	email = '';

  constructor(public nav: NavController, public partyService: Parties, public modalCtrl: ModalController, public viewCtrl: ViewController, private auth: AuthService) {
    this.ionViewDidLoad();
    let info = this.auth.getUserInfo();
    this.username = info['name'];
    this.email = info['email'];
  }

  ionViewDidLoad(){

    this.partyService.getParties().then((data) => {
      console.log(data);
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
    console.log('home delete');
    console.log(party);
    console.log(party._id);

    console.log(this.parties);

      this.ionViewDidLoad();

      console.log(this.parties);

      let index = this.parties.indexOf(party);

      if(index > -1){
        this.parties.splice(index, 1);
      }

    //Remove from database
    this.partyService.deleteParty(party._id);
    this.viewCtrl.dismiss(party);
  }

  public logout() {
    this.auth.logout().subscribe(succ => {
      this.nav.setRoot('Login')
    });
  }

}



