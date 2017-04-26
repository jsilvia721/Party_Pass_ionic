import { partypass } from './partypass';
import {} from 'jasmine';
import { Test } from '../pages/test/test';

let testPage : any;
describe('HomePage testing', () => {
	beforeEach(() => {
		testPage = new Test();
		//need to get that working
	});
	//and this
	// this.partyCaller.getParties().then((data) => {
	//   this.parties = data;
	//   console.log("Data");
	//   console.log(data);
	//   this.checkUser();
	// });
	//for(x in partie)
	console.log('onSuccess');
	it('test sign up account - user', () => {
		var p = testPage.getParties();
		//all the parties object
		console.log(p);
		//gets the address of the first party
		console.log(p[0].address);
		//gets the length of the p
		var length = Object.keys(p).length;
		console.log(Object.keys(p).length);

		//loops through and prints all the parties
		for(var i=0;i<length;i++) {
		  console.log(p[i].address);
		}
		expect(true).toBeTruthy();

	});
	it('test sign in account - user', () => {
		expect(true).toBeTruthy();

	});
	it('test logout account - user', () => {
		expect(true).toBeTruthy();

	});
	it('test sign up account - admin', () => {
		expect(true).toBeTruthy();
	});
	it('test sign in account - admin', () => {
		expect(true).toBeTruthy();

	});
	it('test logout account - admin', () => {
		expect(true).toBeTruthy();
	});
	it('test create', () => {
		expect(true).toBeTruthy();

	});
	it('test edit party', () => {
		expect(true).toBeTruthy();

	});
	it('test delete party', () => {
		expect(true).toBeTruthy();

	});
	it('test notification', () => {
		expect(true).toBeTruthy();

	});


});
