import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { ViaCepService } from '../service/via-cep.service';

@Component({
  selector: 'app-perfil-cliente',
  templateUrl: './perfil-cliente.component.html',
  styleUrls: ['./perfil-cliente.component.css']
})
export class PerfilClienteComponent implements OnInit {

  nome = environment.nome
  email = environment.email
  apelido = environment.apelido
  dataNascimento = environment.dataNascimento
  telefone = environment.telefone

  constructor(
    private viaCep: ViaCepService
  ) { }

  ngOnInit(): void {
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
