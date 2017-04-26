import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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


  constructor() {
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

  getParties(){
    return this.parties;
  }



  }
