import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  templateUrl: 'login.component.html',
  styles: [`
    em { float:right; color:#E05C65; padding-left:10px; }
  `]
})
export class LoginComponent {
  constructor(private router: Router) {

  }

  login(formValues) {
    this.router.navigate(['events']);
  }

  cancel() {
    this.router.navigate(['events']);
  }
}
