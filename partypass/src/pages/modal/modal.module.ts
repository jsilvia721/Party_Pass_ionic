import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { Modal } from './modal';

@NgModule({
  declarations: [
    Modal,
  ],
  imports: [
    IonicModule.forChild(Modal),
  ],
  exports: [
    Modal
  ]
})
export class ModalModule {}
