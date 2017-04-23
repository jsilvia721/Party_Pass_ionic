import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	this.party = navParams.get('party');
  	console.log(this);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Modal');
  }

  // deleteParty(party){
 
  //   //Remove locally
  //     let index = this.party.indexOf(party);
 
  //     if(index > -1){
  //       this.party.splice(index, 1);
  //     }   
 
  //   //Remove from database
  //   this.partyService.deleteParty(party._id);
  // }

}
