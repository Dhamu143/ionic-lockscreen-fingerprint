import { Component } from '@angular/core';
import { IonicPage, ViewController } from 'ionic-angular';
import { TouchID } from '@ionic-native/touch-id';

@IonicPage()
@Component({
  selector: 'page-lock-screen',
  templateUrl: 'lock-screen.html',
})
export class LockScreen {

  constructor(public viewCtrl: ViewController, public touchId: TouchID) {
  }

	ionViewDidEnter() {
		this.verify();
	}

	verify(){

		this.touchId.verifyFingerprint('Scan your fingerprint to unlock').then((res) => {
			this.viewCtrl.dismiss();
		}, (err) => {
			console.log(err);
			this.verify();
		});

	}

}
