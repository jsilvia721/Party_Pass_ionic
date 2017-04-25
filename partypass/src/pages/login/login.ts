import { Component } from '@angular/core';
import { NavController, AlertController, LoadingController, Loading, NavParams } from 'ionic-angular';
import { AuthService } from '../../providers/auth-service';
import { Register } from '../register/register';
import { HomePage } from '../home/home';
import { TabsPage } from '../tabs/tabs';
import { Parties } from '../../providers/parties';


@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class Login {
  loading: Loading;
  parties: any;
  party: any;
  userinfo: any;
  registerCredentials = { email: '', password: '' };
  constructor(public nav: NavController, private auth: AuthService, private alertCtrl: AlertController, private loadingCtrl: LoadingController, public partyService: Parties, public navParams: NavParams) {
    this.userinfo = {
      username: '',
      password: '',
      userid : 0
    };
    this.partyService.getParties().then((data) => {

      console.log(data);
      this.parties = data;
    });
    this.party = navParams.get('party');
    console.log('party');
    console.log(this.party);
  }
  // ionViewWillEnter(){
  //   this.nav.setRoot(Login);
  // }
  public createAccount() {
    this.nav.push(Register)
  }
  public login() {
    // this.showLoading()
    this.userinfo = {
      username: this.registerCredentials.email,
      password: this.registerCredentials.password,
      userid: 0
  }
  console.log(this.userinfo);
    this.auth.login(this.registerCredentials).subscribe(allowed => {
      if (allowed) {
        this.nav.push(TabsPage);
      }
    },
      error => {
        this.showError(error);
      });
  }

  showLoading() {
    this.loading = this.loadingCtrl.create({
      content: 'Please wait...',
      dismissOnPageChange: true
    });
    this.loading.present();
  }

  showError(text) {
    this.loading.dismiss().catch(() => {});

    let alert = this.alertCtrl.create({
      title: 'Fail',
      subTitle: text,
      buttons: ['OK']
    });
    alert.present(prompt);
  }
}
