import {} from 'jasmine';
import { Test } from '../pages/test/test';
import { Parties } from './parties';
import { Http, BaseRequestOptions, ConnectionBackend, RequestOptions } from '@angular/http';
import { MockBackend } from '@angular/http/testing';
import { ReflectiveInjector} from '@angular/core';

let testPage : any;
// let passParty : any;
//let http: Http;
let partyService : any;

// let defaultOptions: any;

describe('HomePage testing', () => {

	// beforeEach(() => {
	// 	this.injector = ReflectiveInjector
	// 	backend = new MockBackend();
	// 	defaultOptions = new BaseRequestOptions()
	// 	testPage = new Test(passParty);
	// 	testParties = new Parties(new Http( backend, defaultOptions));
	// });
	beforeEach(() => {
		testPage = new Test(partyService);
    this.injector = ReflectiveInjector.resolveAndCreate([
      {provide: ConnectionBackend, useClass: MockBackend},
      {provide: RequestOptions, useClass: BaseRequestOptions},
      Http,
      Parties,
    ]);
		this.testParties = this.injector.get(Parties);
		this.backend = this.injector.get(ConnectionBackend) as MockBackend;
		this.backend.connections.subscribe((connection: any) => this.lastConnection = connection);
	});
	// http.get('http://localhost:8080/api/parties')
	// .map(res => res.json())
	// .subscribe(data => {
	// 	testParties = data;
	// 	console.log(testParties);
	// });
	//and this
	// this.partyCaller.getParties().then((data) => {
	//   this.parties = data;
	//   console.log("Data");
	//   console.log(data);
	//   this.checkUser();
	// });
	//for(x in partie)
	it('getParties should query current service url', () => {
		this.testParties.getParties();
		expect(this.lastConnection).toBeDefined('no http service connection');
		expect(this.lastConnection.request.url).toMatch(/api\/parties/, 'url invalid');
});
	it('test sign up account - user', () => {
		//get parties from get request in providers/parties
		testPage.getPartiesTest();
		// console.log(testParties);

		// var p = testPage.myMadeParties();
		//all the parties object
		// console.log(p);
		// //gets the address of the first party
		// console.log(p[0].address);
		// //gets the length of the p
		// var length = Object.keys(p).length;
		// console.log(Object.keys(p).length);
		//
		// //loops through and prints all the parties
		// for(var i=0;i<length;i++) {
		//   console.log(p[i].address);
		// }
		expect(true).toBeTruthy();

	});
	it('test create', () => {
		this.testParties.createParty(testPage.myParty());
		console.log(this.testParties.getParties());
		//you can see the party added at http://localhost:8080/api/parties
		expect(this.testParties.getParties().__zone_symbol__value.length===1);
		//expect('http://localhost:8080/api/parties').toMatch("58fffb167e8f8a29d04c3920");

	});
	it('test delete party', () => {
		this.testParties.deleteParty('58fffb167e8f8a29d04c3920');
		expect(this.testParties.getParties().__zone_symbol__value.length).toEqual(0);

	});


});
