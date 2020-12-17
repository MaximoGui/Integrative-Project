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
    if (this.userLogin.email === 'admin@getset.com') {
      this.userLogin.admin = true
      console.log(this.userLogin.admin)
      this.authService.logar(this.userLogin).subscribe((resp: any = UserLogin) => {
        this.userLogin = resp
        localStorage.setItem('token', this.userLogin.token)
        this.router.navigate(['/home'])
      })
    } else {
      this.userLogin.admin = false
      console.log(this.userLogin.admin)
      this.authService.logar(this.userLogin).subscribe((resp:any = UserLogin) => {
        this.userLogin = resp
        localStorage.setItem('token', this.userLogin.token)
        this.router.navigate(['/home'])
      })
    }
  }
}