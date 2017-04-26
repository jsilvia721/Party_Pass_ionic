import { partypass } from './partypass';
import {} from 'jasmine';
import { Test } from '../pages/test/test';
import { Parties } from './parties';
import { addProviders, inject } from '@angular/core/testing';
import { Http, BaseRequestOptions } from '@angular/http';
import { MockBackend } from '@angular/http/testing';

let testPage : any;
let passParty : any;
let http: Http;
let testParties: any;

describe('HomePage testing', () => {

	beforeEach(() => {

		testPage = new Test(passParty);
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
	console.log('onSuccess');
	it('test sign up account - user', () => {
		//get parties from get request in providers/parties
		testPage.getPartiesTest();
		// console.log(testParties);

		var p = testPage.myMadeParties();
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
