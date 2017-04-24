import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ModalController } from 'ionic-angular';
import { Autocomplete } from '../autocomplete/autocomplete';


/**
 * Generated class for the Edit page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-edit',
  templateUrl: 'edit.html',
})
export class Edit {

party: any;
address: any;
date: any;
startTime: any;
endTime: any;
host: any;

  constructor(public navCtrl: NavController,public viewCtrl: ViewController, public navParams: NavParams, private modalCtrl: ModalController) {

    this.party = navParams.get('party');

    this.address = this.party.address;
    this.date = this.party.date;
    this.startTime = this.party.startTime;
    this.endTime = this.party.endTime;
    this.host = this.party.host;

    console.log("edit test");
    console.log(this.party);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Edit');
  }

  close(): void {
    this.viewCtrl.dismiss();
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

  showAddressModal () {
    let modal = this.modalCtrl.create(Autocomplete);
    let me = this;
    modal.onDidDismiss(data => {
      this.address.place = data;

    });
    modal.present();
  }



}
