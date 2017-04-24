import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ModalController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { Autocomplete } from '../autocomplete/autocomplete';

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

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController, private modalCtrl: ModalController) {
    this.address = {
      place: ''
    };
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Registration');
  }

  save(): void {

    let party = {
      address: this.address.place,
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

  showAddressModal () {
    let modal = this.modalCtrl.create(Autocomplete);
    let me = this;
    modal.onDidDismiss(data => {
      this.address.place = data;

    });
    modal.present();
  }

}
