import { Component } from '@angular/core';
import { App,IonicPage, NavController, NavParams, ViewController, ModalController, LoadingController, Loading } from 'ionic-angular';
import { Parties } from '../../providers/parties';
import { HomePage } from '../home/home';
import { Registration } from '../registration/registration'
import { Edit } from '../edit/edit'
import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { AuthService } from '../../providers/auth-service';
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
  parties: any;
  HomePage: any;
  constructor(public app: App,public navCtrl: NavController, public navParams: NavParams, public partyService: Parties, public viewCtrl: ViewController, public modelCtrl: ModalController, private auth: AuthService, private loadingCtrl: LoadingController) {
    this.HomePage = new HomePage(app, navCtrl, partyService, modelCtrl, viewCtrl, auth, loadingCtrl);
  	this.party = navParams.get('party');
    this.parties = navParams.get('parties');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Modal');
  }

  deleteParty(){
    this.HomePage.deleteParty(this.party);
  }

  editParty(){
    let modal = this.modelCtrl.create(Edit, {
  		party: this.party
  	});
    modal.onDidDismiss(party => {
      if(party){
        console.log(party);
        this.parties.push(party);
        this.partyService.createParty(party);
        this.partyService.deleteParty(this.party._id);
        this.HomePage.deleteParty(this.party);
      }
    });

    modal.present();
  }

}
