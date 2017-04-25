import { Component } from '@angular/core';
import { AboutPage } from '../about/about';
import { HomePage } from '../home/home';
import { Parties } from '../../providers/parties';
import { NavController, ModalController, ViewController} from 'ionic-angular';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = AboutPage;
  AboutPage: any;

  constructor(public navCtrl: NavController, public partyService: Parties, public modalCtrl: ModalController, public viewCtrl: ViewController) {
    this.AboutPage = new AboutPage(navCtrl, partyService);
  }

  triggerMap(){
    let modal = this.AboutPage;
    modal.ionViewDidLoad();
  }
}
