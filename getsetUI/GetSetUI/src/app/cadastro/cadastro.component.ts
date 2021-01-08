import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../Model/Usuario';
import { AlertasService } from '../service/alertas.service';
import { AuthService } from '../service/auth.service';
import { ViaCepService } from '../service/via-cep.service';

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
    private viaCep: ViaCepService,
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

  consultaCep(valor: any, form: any){
    this.viaCep.buscar(valor).subscribe((dados: any) => this.populaForm(dados,form));
  }

  populaForm(dados: any, form: any){
    form.setValue({
      cep: dados.cep,
      logradouro: dados.logradouro,
      bairro: dados.bairro,
      cidade: dados.localidade,
      uf: dados.uf
    })
  }
}
