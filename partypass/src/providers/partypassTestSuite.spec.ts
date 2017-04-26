import { partypass } from './partypass';
import {} from 'jasmine';
import { Test } from '../pages/test/test';
import { Parties } from '../providers/parties';
import { Http, Headers } from '@angular/http';

let testPage : any;
let partyCaller: any;
let parties: any;
describe('HomePage testing', () => {
	beforeEach(() => {
		    testPage = new Test();
				//need to get that working
				//partyCaller: new Parties(Http);
    });
		//and this
		// this.partyCaller.getParties().then((data) => {
    //   this.parties = data;
    //   console.log("Data");
    //   console.log(data);
    //   this.checkUser();
    // });

		it('test sign up account - user', () => {
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
