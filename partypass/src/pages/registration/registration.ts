import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home'

/**
 * Generated class for the Registration page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-registration',
  templateUrl: 'registration.html',
})
export class Registration {

	// registrationForm: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	// this.registrationForm = navParams.get('registrationForm');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Registration');
  }

  submitParty(){
  	this.navCtrl.push(HomePage);
  }

}
