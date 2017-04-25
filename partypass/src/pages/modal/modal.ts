import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ModalController } from 'ionic-angular';
import { Parties } from '../../providers/parties';
import { HomePage } from '../home/home';
import { Registration } from '../registration/registration'
import { Edit } from '../edit/edit'
import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@IonicPage()
@Component({
  selector: 'page-modal',
  templateUrl: 'modal.html',
})
export class Modal {

  party: any;
  parties: any[];
  HomePage2: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public partyService: Parties, public viewCtrl: ViewController, public modelCtrl: ModalController) {
    this.HomePage2 = new HomePage(navCtrl, partyService, modelCtrl, viewCtrl);
    this.partyService.getParties().then((data) => {
      this.parties = data;
    });
    this.party = navParams.get('party');
  }

  ionViewDidLoad() {

  }

  deleteParty(){
    this.HomePage2.deleteParty(this.party);
  }

  editParty(){

    let modal = this.modelCtrl.create(Edit, {
      party: this.party
    });
    modal.onDidDismiss(party => {
      if(party){
        this.parties.push(party);
        this.partyService.createParty(party);
        this.partyService.deleteParty(this.party._id);
        this.HomePage2.deleteParty(this.party);
      }
    });

    modal.present();
  }
}
