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
place: any;
lat: any;
long: any;
date: any;
startTime: any;
endTime: any;
host: any;

  constructor(public navCtrl: NavController,public viewCtrl: ViewController, public navParams: NavParams, private modalCtrl: ModalController) {

    this.party = navParams.get('party');

// if(this.party.address){
//     this.address = {
//       place: this.party.address.place,
//       lat: this.party.address.lat,
//       long: this.party.address.long
//     };
//   }
//   else{
//     this.address = {
//       place: '',
//       lat: 0,
//       long: 0
//     };
//
//   }
    this.place = this.party.address;
    this.lat = this.party.lat;
    this.long = this.party.long;

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
      address: this.place,
      lat: this.lat,
      long: this.long,
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
      console.log('data passed to registration');
      console.log(data);
      if(data){
      this.place = data[0];
      this.lat = data[1];
      this.long = data[2];
    }
    });
    modal.present();
  }



}
