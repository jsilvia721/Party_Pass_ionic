import { Component, NgZone } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
/**
 * Generated class for the Autocomplete page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
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
    console.log('item passed');
    console.log(item);
    console.log(this);
    this.geocoder.geocode({'address': item}, function(results, status) {
        if (status === 'OK') {
          console.log(results[0].geometry.location.lat());
          console.log(results[0].geometry.location.lng());
        } else {
          alert('Geocode was not successful for the following reason: ' + status);
        }
      });
    this.viewCtrl.dismiss(item);
  }

  updateSearch() {
    if (this.autocomplete.query == '') {
      this.autocompleteItems = [];
      return;
    }
    let me = this;
    this.service.getPlacePredictions({ input: this.autocomplete.query }, function (predictions, status) {
      me.autocompleteItems = [];
      console.log(predictions[0].description);
      //console.log(me);
      me.zone.run(function () {
        if (predictions){
          predictions.forEach(function (prediction) {
            me.autocompleteItems.push(prediction.description);
          });
        }
      });
    });
  }
}
