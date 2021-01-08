import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CadastroComponent } from '../cadastro/cadastro.component';

@Injectable({
  providedIn: 'root'
})
export class ViaCepService {

  constructor(
    private httpClient: HttpClient
  ) { }

  ngOnInit() {
  }

  buscar (cep: String) {
    console.log(cep)
    return this.httpClient.get(`https://viacep.com.br/ws/${cep}/json`)
  }

}
