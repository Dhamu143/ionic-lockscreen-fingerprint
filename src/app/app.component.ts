import { Component, ViewChild } from '@angular/core';
import { Platform, ModalController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  rootPage:any = HomePage;

  constructor(platform: Platform, modalCtrl: ModalController, statusBar: StatusBar, splashScreen: SplashScreen) {

    platform.ready().then(() => {

      platform.resume.subscribe(() => {
        let modal = modalCtrl.create('LockScreen');
        modal.present();
      });      

    });

  }
}

