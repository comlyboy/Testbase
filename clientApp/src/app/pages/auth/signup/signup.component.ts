import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { NavigationService } from '../../../service/navigation.service';
import { UserSignUpDto } from '../../user/user.dto';

import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss', '../../../../assets/css/custom-form.scss']
})
export class SignupComponent implements OnInit {
  passwordInputType = 'password';
  isPasswordMatch = true;
  isAuthenticated = true;

  constructor(
    private authService: AuthService,
    private navigationService: NavigationService
  ) { }


  onRegisterUser(form: NgForm) {
    if (form.invalid) {
      return;
    }
    
    const registrationData: UserSignUpDto = {
      firstName: form.value.inputFirstName,
      surName: form.value.inputSurName,
      userName: form.value.inputUserName,
      registrationCode: form.value.inputRegistrationCode.toString(),
      password: form.value.inputPassword1
    }

    this.authService.registerUser(registrationData);
  }


  onTogglePasswordDisplay() {
    if (this.passwordInputType === 'password') {
      return this.passwordInputType = 'text'
    }
    if (this.passwordInputType === 'text') {
      return this.passwordInputType = 'password'
    }
  }


  onMatchPassword(form: NgForm) {
    console.log(form.value)
    const firstPassword = form.value.inputPassword1;
    const secontPassword = form.value.inputPassword2;
    if (firstPassword !== secontPassword) {
      this.isPasswordMatch = false;
      return;
    }
    this.isPasswordMatch = true;
  }


  initContent() {
    const isAuth = this.authService.getIsAuthenticated();
    const userType = this.authService.getAuthenticatedUserType()

    if (isAuth) {
      this.navigationService.goToMenu();
    }
  }


  
  ngOnInit(): void {
    this.initContent();
  }


}
