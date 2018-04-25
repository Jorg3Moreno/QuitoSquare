import {Injectable} from '@angular/core';
import {AngularFireAuth} from 'angularfire2/auth';
import {Router} from '@angular/router';
import * as firebase from 'firebase/app';

@Injectable()
export class AuthService {
  constructor(private angularFireAuth: AngularFireAuth, private router: Router) {
    this.isLogged();
  }
  public login (email, password) {
    this.angularFireAuth.auth.signInWithEmailAndPassword(email, password)
      .then((response) => {
        alert('Usuario logueado con exito');
        console.log(response);
        this.router.navigate(['lugares']);
      })
      .catch((error) => {
        alert('Un error ha ocurrido');
        console.log(error);
      });
  }

  public registro (email, password) {
    this.angularFireAuth.auth.createUserWithEmailAndPassword(email, password)
      .then((response) => {
        alert('Usuario registrado con exito');
        console.log(response);
        this.router.navigate(['lugares']);
      })
      .catch((error) => {
        alert('Un error ha ocurrido');
        console.log(error);
      });
  }

  public isLogged() {
    return this.angularFireAuth.authState;
  }

  public logout () {
    this.angularFireAuth.auth.signOut()
      .then((response) => {
        alert('Vuelva pronto');
        this.router.navigate(['lugares']);
      })
      .catch((error) => {
        alert('Un error ha ocurrido');
      });
  }

  public facebookLogin() {
    this.angularFireAuth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider())
      .then((result) => {
        console.log(result);
        alert('Usuario Loggeado con Facebook');
        this.router.navigate(['lugares']);
      })
      .catch((error) => {
        console.log(error);
      });
  }
}
