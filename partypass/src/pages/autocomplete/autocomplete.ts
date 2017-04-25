import { Component, NgZone } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

declare var google;

@IonicPage()
@Component({
  selector: 'page-autocomplete',
  templateUrl: 'autocomplete.html',
})
export class Autocomplete {

  autocompleteItems;
  autocomplete;
  service = new google.maps.places.AutocompleteService();
  geocoder = new google.maps.Geocoder();
  constructor (public viewCtrl: ViewController, private zone: NgZone) {
    this.autocompleteItems = [];
    this.autocomplete = {
      query: ''
    };
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  chooseItem(item: any) {
    let me = this;
    this.geocoder.geocode({'address': item}, function(results, status) {
      if (status === 'OK') {
        //gets location from google based on address and returns the results which contain the coordinates,
        //pass that to registraion so we could save the coordinates in our database
        let data: [string, number, number] = [item, results[0].geometry.location.lat(), results[0].geometry.location.lng()];
        me.viewCtrl.dismiss(data);
      } else {
        alert('Geocode was not successful for the following reason: ' + status);
      }
    });
  }

  updateSearch() {
    if (this.autocomplete.query == '') {
      this.autocompleteItems = [];
      return;
    }
    let me = this;
    this.service.getPlacePredictions({ input: this.autocomplete.query }, function (predictions, status) {
      me.autocompleteItems = [];
      me.zone.run(function () {
        if (status === 'OK'){
          predictions.forEach(function (prediction) {
            me.autocompleteItems.push(prediction.description);
          });
        }
      });
    });
  }
}
