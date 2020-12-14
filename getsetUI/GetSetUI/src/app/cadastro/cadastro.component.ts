import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../Model/Usuario';
import { AlertasService } from '../service/alertas.service';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  usuario: Usuario = new Usuario()
  senha: string

  constructor(
    public authService: AuthService,
    public router: Router,
    private alert: AlertasService
  ) { }

  ngOnInit() {
  }

  conferirSenha(event: any) {
    this.senha = event.target.value
  }

  cadastrar() {
    if(this.senha === this.usuario.senha) {
      this.authService.cadastrar(this.usuario).subscribe((resp:any = Usuario) => {
        this.usuario = resp
        this.router.navigate(["/login"])
        this.alert.showAlertSuccess('Usuário cadastrado com sucesso')
      })
    }else {
      this.alert.showAlertDanger('Suas senhas não conferem')
    }
  }

}
