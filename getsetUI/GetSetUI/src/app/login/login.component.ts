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
      environment.id = this.userLogin.id
      environment.nome = this.userLogin.nome
      environment.email = this.userLogin.email
      environment.apelido = this.userLogin.apelido
      environment.dataNascimento = this.userLogin.dataNascimento
      environment.telefone = this.userLogin.telefone
      environment.cep = this.userLogin.cep
      environment.rua = this.userLogin.rua
      environment.numero = this.userLogin.numero
      environment.complemento = this.userLogin.complemento
      environment.bairro = this.userLogin.bairro
      environment.cidade = this.userLogin.cidade
      environment.uf = this.userLogin.uf
      environment.referencia = this.userLogin.referencia
      environment.admin = this.userLogin.admin

      console.log(environment.nome)
      console.log(environment.apelido)

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