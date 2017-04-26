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
   error: boolean;
   parties: any;
   HomePage: any;
   username: any;
   email: any;
   notification: any;
   constructor(public app: App,public navCtrl: NavController, public navParams: NavParams, public partyService: Parties, public viewCtrl: ViewController, public modelCtrl: ModalController, private auth: AuthService, private loadingCtrl: LoadingController) {
     this.HomePage = new HomePage(app, navCtrl, partyService, modelCtrl, viewCtrl, auth, loadingCtrl);
     this.error = false;
     this.party = navParams.get('party');
     this.parties = navParams.get('parties');
     let info = this.auth.getUserInfo();
     this.username = info.pass;
     this.email = info.email;
     console.log(this.party.userinfo[0].notification);
     this.notification = this.party.userinfo[0].notifcation;
   }

   ionViewDidLoad() {
     console.log('ionViewDidLoad Modal');
     if(this.party.userinfo[0].notification != ''){
       var s = document.createElement("strong");
       s.style.color="red";
       var t = document.createTextNode("* Party Has Been Warned");
       s.appendChild(t);
       document.getElementById("error3").appendChild(s);
     }
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

   notify(){
     if(!this.error){
       this.error = true;
       var s = document.createElement("strong");
       s.style.color="red";
       var t = document.createTextNode("* Party Has Been Warned");
       s.appendChild(t);
       
       document.getElementById("error3").appendChild(s);
       this.party.userinfo[0].notification = 'PARTY HAS BEEN WARNED';
       this.partyService.deleteParty(this.party._id);
       this.partyService.createParty(this.party);
       console.log(this.party);
     }

   }

 }
