import { NgModule } from '@angular/core';
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
