import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { Parties } from '../../providers/parties';
import { HomePage } from '../home/home';
import { Registration } from '../registration/registration'
import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

/**
 * Generated class for the Modal page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-modal',
  templateUrl: 'modal.html',
})
export class Modal {

	party: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public partyService: Parties, public viewCtrl: ViewController) {
  	this.party = navParams.get('party');
  	console.log('party');
  	console.log(this.party);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Modal');
  }

  deleteParty(){
    this.partyService.deleteParty(this.party._id);
    this.viewCtrl.dismiss(this.party);

  }

}
