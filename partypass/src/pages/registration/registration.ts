import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ModalController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { Autocomplete } from '../autocomplete/autocomplete';
import { AuthService } from '../../providers/auth-service';


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
  userinfo : any;
  usercredentials : any;
  username : any;
  password : any;
  notification : any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController, private modalCtrl: ModalController, private auth: AuthService) {
    this.usercredentials = auth.getUserInfo();
    this.address = {
      place: '',
      lat: 0,
      long: 0
    };
    this.userinfo = {
      username: this.usercredentials.email,
      password: this.usercredentials.pass,
      notification: 'YA DON FUCKED UP AARON'
    };
    console.log("USER INFO");
    console.log(auth.getUserInfo());
  }

  ionViewDidLoad() {

  }

  save(): void {
    console.log("REACHED SAVE AND THIS IS THE EMAIL")
    console.log(this.usercredentials.email);

    let party = {
      address: this.address.place,
      lat: this.address.lat,
      long: this.address.long,
      date: this.date,
      startTime: this.startTime,
      endTime: this.endTime,
      host: this.host,
      userinfo: this.userinfo
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
      if(data){
        this.address.place = data[0];
        this.address.lat = data[1];
        this.address.long = data[2];
      }
    });
    modal.present();
  }
}
