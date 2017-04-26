import { partypass } from './partypass';
import {} from 'jasmine';
import { HomePage } from '../pages/home/home';
import { Login } from '../pages/login/login';
import { Registration } from '../pages/registration/registration';
import { NavController, ModalController, ViewController, App, LoadingController, Loading, NavParams, AlertController} from 'ionic-angular';
import { Parties } from './parties';
import { AuthService } from './auth-service'


let testHomePage = null;
let testLogin = null;
let testRegistration = null;

describe('HomePage testing', () => {
	let app: App;
	let navCtrl: NavController;
	let navParams: NavParams;
	let partyService: Parties;
	let viewCtrl: ViewController;
	let modelCtrl: ModalController;
	let auth: AuthService;
	let loadingCtrl: LoadingController;
	let alertCtrl: AlertController;
	beforeEach(() => {
        testHomePage = new HomePage(app, navCtrl, partyService, modelCtrl, viewCtrl, auth, loadingCtrl);
				testLogin = new Login(navCtrl, auth, alertCtrl, loadingCtrl, partyService, navParams);
				testRegistration = new Registration(navCtrl, navParams, viewCtrl, modelCtrl, auth);
    });
		it('test sign up account - user', () => {
        expect(false).toBeTruthy();

    });
		it('test sign in account - user', () => {
        expect(false).toBeTruthy();

    });
		it('test logout account - user', () => {
        expect(false).toBeTruthy();

    });
		it('test sign up account - admin', () => {
        expect(false).toBeTruthy();
    });
		it('test sign in account - admin', () => {
        expect(false).toBeTruthy();

    });
		it('test logout account - admin', () => {
        expect(false).toBeTruthy();
    });
		it('test create', () => {
        expect(false).toBeTruthy();

    });
		it('test edit party', () => {
        expect(false).toBeTruthy();

    });
		it('test delete party', () => {
        expect(false).toBeTruthy();

    });
		it('test notification', () => {
        expect(false).toBeTruthy();

    });


});
