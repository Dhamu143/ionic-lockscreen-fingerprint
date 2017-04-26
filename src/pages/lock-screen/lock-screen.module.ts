import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LockScreen } from './lock-screen';

@NgModule({
  declarations: [
    LockScreen,
  ],
  imports: [
    IonicPageModule.forChild(LockScreen),
  ],
  exports: [
    LockScreen
  ]
})
export class LockScreenModule {}
