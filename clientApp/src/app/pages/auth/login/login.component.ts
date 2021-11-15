import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  passwordInputType = 'password';

  constructor(
    private authService: AuthService
  ) { }

  onLoginUser(form: NgForm) {
    if (form.invalid) {
      return;
    }

    const authdata: any = {
      email: form.value.inputEmail,
      password: form.value.inputPassword
    }
    this.authService.loginUser(authdata);
  }


  onTogglePasswordDisplay() {
    if (this.passwordInputType === 'password') {
      return this.passwordInputType = 'text'
    }
    if (this.passwordInputType === 'text') {
      return this.passwordInputType = 'password'
    }
    return;
  }


  initContent() {
  }


  ngOnInit(): void {
    this.initContent();
  }

}
