import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Parties } from '../../providers/parties';


/**
* Generated class for the Map page.
*
* See http://ionicframework.com/docs/components/#navigation for more info
* on Ionic pages and navigation.
*/
declare var google;

@Component({
  selector: 'about-page',
  templateUrl: 'about.html'
})
export class AboutPage {

  @ViewChild('map') mapElement: ElementRef;
  map: any;
  parties: any[];

  constructor(public navCtrl: NavController, public partyService: Parties) {

  }

  ionViewDidLoad(){
  	this.partyService.getParties().then((data) => {
      console.log(data);
      this.parties = data;
    });
    console.log("this is the parties object: " + this.parties);
    this.loadMap();
  }

  loadMap(){

    let latLng = new google.maps.LatLng(42.3912, -72.5267);

    let mapOptions = {
      center: latLng,
      zoom: 13,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }

    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);

  }

  addInfoWindow(marker, content){

    let infoWindow = new google.maps.InfoWindow({
      content: content
    });

    google.maps.event.addListener(marker, 'click', () => {
      infoWindow.open(this.map, marker);
    });

  }

  addMarker(){

    let marker = new google.maps.Marker({
      map: this.map,
      animation: google.maps.Animation.DROP,
      position: this.map.getCenter()
    });

    let content = "<h4>Information!</h4>";

    this.addInfoWindow(marker, content);

  }


}