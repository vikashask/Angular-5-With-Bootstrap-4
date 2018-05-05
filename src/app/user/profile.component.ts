import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Component({
  templateUrl: './profile.component.html',
  styles: [`
    em {float:right; color:#E05C65; padding-left: 10px;}
    .error input {background-color:#E3C3C5;}
    .error ::-webkit-input-placeholder { color: #999; }
    .error ::-moz-placeholder { color: #999; }
    .error :-moz-placeholder { color:#999; }
    .error :ms-input-placeholder { color: #999; }
  `]
})
export class ProfileComponent implements OnInit {

  profileForm: FormGroup;
  private _firstName: FormControl;
  private _lastName: FormControl;
  constructor(private _authService: AuthService, private _router: Router) {
  }

  ngOnInit() {
    this._firstName = new FormControl('', Validators.required);
    this._lastName = new FormControl('', Validators.required);

    this.profileForm = new FormGroup({
      firstName: this._firstName,
      lastName: this._lastName
    });

  }
  cancel() {
    this._router.navigate(['events']);
  }

  validateFirstName() {
    return this._firstName.valid || this._firstName.untouched;
  }
  saveProfile(profileForm) {
    this._authService.updateCurrentUser(profileForm.firstName, profileForm.lastName);
    this._router.navigate(['events']);
  }

  validateLastName() {
    return this._lastName.valid || this._lastName.untouched;
  }

}
