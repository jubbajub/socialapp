import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';

import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  username = '';
  password = '';
  cpassword = '';

  constructor(
    public afAuth: AngularFireAuth,
    public alert: AlertController,
    public router: Router
    ) {}

  ngOnInit() {
  }

  async register() {
    const {username, password, cpassword} = this;
    if (password !== cpassword) {
      this.showAlert('Error!', 'Passwords dont match!');
      // return console.error('Password and Confirm-Password does not match');
    }

    try {
      const res = await this.afAuth.auth.createUserWithEmailAndPassword(username + '@gmx.de', password);
      console.log(res);
      this.showAlert('Success!', 'You are now registered!');
      this.router.navigate(['/tabs']);
    } catch (error) {
      console.dir(error);
      this.showAlert('Error', error.message);
    }
  }
  async showAlert(header: string, message: string) {
    const alert = await this.alert.create({
      header,
      message,
      buttons: ['OK']
    });

    await alert.present();
  }

}
