import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  username = '';
  password = '';

  constructor(
    public afAuth: AngularFireAuth,
    public router: Router) {
  }

  ngOnInit() {
  }

  async login() {
    const {username, password} = this;
    try {
      // kind of a hack. Will fix later
      const res = await this.afAuth.auth.signInWithEmailAndPassword(username + '@gmx.de', password);
      this.router.navigate(['/tabs']);
    } catch (err) {
      console.dir(err);
    }
  }
}
