import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Modal } from '../modal/modal';
import { Registration } from '../registration/registration'


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

	items: any[];
	// registrationForm: any[];

  constructor(public navCtrl: NavController) {
  	this.items = [];
  	for(let i = 0; i < 10; i++){
  		this.items.push({
  			text: 'Item ' + i,
  			id: i
  		})
  	}

  	// this.registrationForm.push()

  }

  itemSelected(item){
  	this.navCtrl.push(Modal, {
  		item: item
  	});
  }

  triggerRegisterParty(){
  	this.navCtrl.push(Registration);
  }

}
