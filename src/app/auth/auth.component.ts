import { Component } from '@angular/core';
import {AuthService} from '../services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html'
})
export class AuthComponent {
  email: string;
  password: string;

  constructor(private authService: AuthService) {
  }

  onAuth() {
    this.authService.login(this.email, this.password);
  }

  facebookLogin() {
    this.authService.facebookLogin();
  }
}
