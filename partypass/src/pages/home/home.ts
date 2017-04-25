import { Component } from '@angular/core';
import { NavController, ModalController, ViewController } from 'ionic-angular';
import { Modal } from '../modal/modal';
import { Registration } from '../registration/registration'
import { Parties } from '../../providers/parties';
import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  parties: any[];

  constructor(public nav: NavController, public partyService: Parties, public modalCtrl: ModalController, public viewCtrl: ViewController) {
    this.ionViewDidLoad();
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
}
