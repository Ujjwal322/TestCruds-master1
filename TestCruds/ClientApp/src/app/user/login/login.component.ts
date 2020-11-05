import { Component, OnInit } from '@angular/core';
import { UserserviceService } from '../../services/userservice.service';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formModel = {
    UserName: '',
    PasswordHash: ''
  }
  constructor(private service: UserserviceService, private router: Router, private messageService: MessageService) { }

  ngOnInit() {
    //if (localStorage.getItem('token') != null)
    //  this.router.navigateByUrl('/home');
  }
  onSubmit(form: NgForm) {
    this.service.login(form.value).subscribe(
      (res: any) => {
       //localStorage.setItem('token', res.token);
        localStorage.setItem('token', res.token);
        localStorage.setItem('userName', res.userName);
        localStorage.setItem('fullName', res.fullName);
        this.router.navigateByUrl('/home');
        //this.router.navigate(['/home']);
      },
      err => {
        if (err.status == 400)
          this.messageService.error({ severity: 'error', summary: 'Incorrect username or password.', detail: 'Authentication failed.' });
          //this.toastr.error('Incorrect username or password.', 'Authentication failed.');
        else
          console.log(err);
      }
    );
  }
}
