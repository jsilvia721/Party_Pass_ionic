import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { Registration } from './registration';

@NgModule({
  declarations: [
    Registration,
  ],
  exports: [
    Registration
  ]
})
export class RegistrationModule {}
