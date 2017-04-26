import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Parties } from '../../providers/parties';
import { Http, Headers } from '@angular/http';
/**
* Generated class for the Test page.
*
* See http://ionicframework.com/docs/components/#navigation for more info
* on Ionic pages and navigation.
*/
@IonicPage()
@Component({
  selector: 'page-test',
  templateUrl: 'test.html',
})
export class Test {
  parties: any;
  getParties: any;
  static get parameters() {
    return [[Http]];
  }
  constructor(public partyService: Parties) {
    this.parties = [
      {
        "address": "22 x way",
        "date":"What does the 3 represent in the number below? 3051",
        "startTime":"10:00",
        "endTime": "10:00",
        "host" : "host2",
        "lat" : 42,
        "long" : 34,
        "userinfo": ["user1", "pass1", "notification"]
      },
      {
        "address": "will x way",
        "date":"What does the 3 represent in the number below? 3051",
        "startTime":"10:00",
        "endTime": "10:00",
        "host" : "host2",
        "lat" : 42,
        "long" : 34,
        "userinfo": ["user1", "pass1", "notification"]
      },
      {
        "address": "bob x way",
        "date":"What does the 3 represent in the number below? 3051",
        "startTime":"10:00",
        "endTime": "10:00",
        "host" : "host2",
        "lat" : 42,
        "long" : 34,
        "userinfo": ["user1", "pass1", "notification"]
      },
      {
        "address": "we good x way",
        "date":"What does the 3 represent in the number below? 3051",
        "startTime":"10:00",
        "endTime": "10:00",
        "host" : "host2",
        "lat" : 42,
        "long" : 34,
        "userinfo": ["user1", "pass1", "notification"]
      },
      {
        "address": "22 x way",
        "date":"What does the 3 represent in the number below? 3051",
        "startTime":"10:00",
        "endTime": "10:00",
        "host" : "host2",
        "lat" : 42,
        "long" : 34,
        "userinfo": ["user1", "pass1", "notification"]
      }
    ];
  }
  getPartiesTest(){
    //this does not work because we do not have an http request for the service
    console.log("in get parties test");
    console.log(this);
    // this.partyService.getParties().then((data) => {
    //   this.getParties = data;
    //   console.log("Data");
    //   console.log(data);
    //   //return this.getParties;
    //   //this.checkUser();
    // });
    console.log("called the service");
  }

  myMadeParties(){
    console.log("making parties");
    return this.parties;
  }



  }
