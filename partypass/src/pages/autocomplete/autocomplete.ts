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
      me.geocoder.geocode({'address': predictions[0].description}, function(results, status) {
          if (status === 'OK') {
            console.log(results[0].geometry.location.lat());
            console.log(results[0].geometry.location.lng());
            // var marker = new google.maps.Marker({
            //   map: resultsMap,
            //   position: results[0].geometry.location
            // });
          } else {
            alert('Geocode was not successful for the following reason: ' + status);
          }
        });

      // me.geocoder.forwardGeocode({input: })
  //     me.nativeGeocoder.forwardGeocode("Berlin")
  // .then((coordinates: NativeGeocoderForwardResult) => console.log("The coordinates are latitude=" + coordinates.latitude + " and longitude=" + coordinates.longitude))
  // .catch((error: any) => console.log(error));
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
