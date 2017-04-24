import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
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

	address: any;
	date: any;
	startTime: any;
	endTime: any;
	host: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Registration');
  }

  save(): void {
 
    let party = {
      address: this.address,
      date: this.date,
      startTime: this.startTime,
      endTime: this.endTime,
      host: this.host
    };
 
    this.viewCtrl.dismiss(party);
 
  }

  close(): void {
    this.viewCtrl.dismiss();
  }

}
