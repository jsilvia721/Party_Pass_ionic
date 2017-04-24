import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { Autocomplete } from './autocomplete';

@NgModule({
  declarations: [
    Autocomplete,
  ],
  exports: [
    Autocomplete
  ]
})
export class AutocompleteModule {}
