import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { Test } from './test';

@NgModule({
  declarations: [
    Test,
  ],
  exports: [
    Test
  ]
})
export class TestModule {}
