import { Injectable } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Http } from '@angular/http';
@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  constructor(private fb: FormBuilder, private http: Http) { }

  readonly BaseURI = 'http://localhost:44370/api';

  formModel = this.fb.group({
    UserName: ['', Validators.required],
    Email: ['', [Validators.required,Validators.email]],
    FullName: [''],
    PasswordHash: ['', [Validators.required, Validators.minLength(4)]],
  });
  //  Passwords: this.fb.group({
  //    PasswordHash: ['', [Validators.required, Validators.minLength(4)]],
  //    ConfirmPassword: ['', Validators.required]
  //  }, { validator: this.comparePasswords })

  //});

  //comparePasswords(fb: FormGroup) {
  //  let confirmPswrdCtrl = fb.get('ConfirmPassword');
  //  if (confirmPswrdCtrl.errors == null || 'passwordMismatch' in confirmPswrdCtrl.errors) {
  //    if (fb.get('PasswordHash').value != confirmPswrdCtrl.value)
  //      confirmPswrdCtrl.setErrors({ passwordMismatch: true });
  //    else
  //      confirmPswrdCtrl.setErrors(null);
  //  }
  //}

  register() {
    var body = {
      UserName: this.formModel.value.UserName,
      Email: this.formModel.value.Email,
      FullName: this.formModel.value.FullName,
      PasswordHash: this.formModel.value.PasswordHash
    };
    return this.http.post(this.BaseURI + '/Login/AddAdmin', body);
  }

  login(formData) {
    return this.http.post(this.BaseURI + '/Login/Post', formData);
  }

  getUserProfile() {
    return this.http.get(this.BaseURI + '/UserProfile');
  }

  getDashboard() {
    return this.http.get(this.BaseURI + '/Customer/GetDashboardsDetail');
  }
}
