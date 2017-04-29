import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ModalController } from 'ionic-angular';
import { Autocomplete } from '../autocomplete/autocomplete';

@IonicPage()
@Component({
  selector: 'page-edit',
  templateUrl: 'edit.html',
})
export class Edit {

  party: any;
  error: boolean;
  address: any;
  place: any;
  lat: any;
  long: any;
  date: any;
  startTime: any;
  endTime: any;
  host: any;
  userinfo : any;

  constructor(public navCtrl: NavController,public viewCtrl: ViewController, public navParams: NavParams, private modalCtrl: ModalController) {
    this.error = false;
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
    this.userinfo = this.party.userinfo;

  }

  ionViewDidLoad() {

  }

  close(): void {
    this.viewCtrl.dismiss();
  }

  save(): void {
    if(this.place && this.date && this.startTime && this.endTime && this.host){
    let party = {
      address: this.place,
      lat: this.lat,
      long: this.long,
      date: this.date,
      startTime: this.startTime,
      endTime: this.endTime,
      host: this.host,
      userinfo: this.userinfo
    };
    this.viewCtrl.dismiss(party);
  }
  else{
    if(!this.error){
    this.error = true;
    var s = document.createElement("strong");
    s.style.color="red";
    var t = document.createTextNode("* One or more required fileds missing");
    s.appendChild(t);
    document.getElementById("error2").appendChild(s);
}
  }
  }

  showAddressModal () {
    let modal = this.modalCtrl.create(Autocomplete);

    // let me = this;
    modal.onDidDismiss(data => {
      if(data){
        this.place = data[0];
        this.lat = data[1];
        this.long = data[2];
      }
    });
    modal.present();
  }
}
