import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { UserLogin } from '../Model/UserLogin';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userLogin: UserLogin = new UserLogin();

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  entrar() {
    this.authService.logar(this.userLogin).subscribe((resp: any = UserLogin) => {
      this.userLogin = resp
      environment.admin = this.userLogin.admin

      if (this.userLogin.email == 'admin@getset.com') {
        environment.admin = true
        console.log(environment.admin)
        environment.token = this.userLogin.token
        this.router.navigate(['/home'])

      } else {
        environment.admin = false
        environment.token = this.userLogin.token
        this.router.navigate(['/home'])
      }
    }) 
  }
}