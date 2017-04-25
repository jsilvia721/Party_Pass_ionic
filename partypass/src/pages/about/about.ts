import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Parties } from '../../providers/parties';

declare var google;

@Component({
  selector: 'about-page',
  templateUrl: 'about.html'
})
export class AboutPage {

  @ViewChild('map') mapElement: ElementRef;
  map: any;
  parties: any;
  party: any;

  constructor(public navCtrl: NavController, public partyService: Parties) {

  }

  ionViewWillEnter(){
    this.partyService.getParties().then((data) => {
      this.parties = data;
      console.log("parties in the maps");
      console.log(data);
      this.loadMap();

      for (let party of this.parties){
        let latLng = new google.maps.LatLng(party.lat, party.long);
        let marker = new google.maps.Marker({
          map: this.map,
          animation: google.maps.Animation.DROP,
          position: latLng
        });
        this.party = party;
        let content = "<p><strong>Address:</strong> " + party.address +"</p> <p><strong>Date:</strong> " + party.date + "</p> <p><strong>Start Time:</strong> " + party.startTime + "</p> <p><strong>End Time:</strong> " + party.endTime + "</p> <p><strong>Host(s):</strong> " +party.host +"</p>";

        this.addInfoWindow(marker, content);
      }
    });
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
}
