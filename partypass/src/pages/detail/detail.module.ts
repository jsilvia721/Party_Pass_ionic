import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { Detail } from './detail';

@NgModule({
  declarations: [
    Detail,
  ],
  imports: [
    IonicModule.forChild(Detail),
  ],
  exports: [
    Detail
  ]
})
export class DetailModule {}
