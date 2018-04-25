import { Component } from '@angular/core';
import {AuthService} from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html'
})
export class RegisterComponent {
  email: string;
  password: string;

  constructor(private authService: AuthService) {
  }

  onRegister() {
    this.authService.registro(this.email, this.password);
  }
}
