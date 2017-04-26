import { partypass } from './partypass';
import {} from 'jasmine';
import { HomePage } from '../pages/home/home';
import { NavController, ModalController, ViewController, App, LoadingController, Loading, NavParams} from 'ionic-angular';
import { Parties } from './parties';
import { AuthService } from './auth-service'


let testHomePage = null;

describe('HomePage testing', () => {
	let app: App;
	let navCtrl: NavController;
	let navParams: NavParams;
	let partyService: Parties;
	let viewCtrl: ViewController;
	let modelCtrl: ModalController;
	let auth: AuthService;
	let loadingCtrl: LoadingController;
	beforeEach(() => {
        testHomePage = new HomePage(app, navCtrl, partyService, modelCtrl, viewCtrl, auth, loadingCtrl);
    });
    it('test create', () => {
		testHomePage.addParty();
        expect(false).toBeTruthy();

    });


});
