import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { HomePage } from '../home/home';
import { Parties } from '../../providers/parties';
import { NavController} from 'ionic-angular';


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = AboutPage;
  AboutPage: any;

  constructor(public navCtrl: NavController, public partyService: Parties) {
  	this.AboutPage = new AboutPage(navCtrl, partyService);
  }

  triggerMap(){
  	this.AboutPage.ionViewDidLoad();
  }
}
