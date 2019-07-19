import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import * as firebase from 'firebase';
import {Observable} from 'rxjs';
import {User} from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public AFauth: AngularFireAuth) { }

  doLogin(uname: string, pass: string) {
    firebase.auth().signInWithEmailAndPassword(uname, pass).then(res => {
      console.log(res.user);
    });
  }
  isLoggedIn(): boolean {
    if (firebase.auth().currentUser != null) {
        if (firebase.auth().currentUser.getIdToken() == null) {
          return false;
        } else {
          return true;
        }
    }
   }
}
