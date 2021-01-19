import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Produto } from '../Model/Produto';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  constructor(private http: HttpClient) { }

  token = {
    headers: new HttpHeaders().set('Authorization',environment.token)
  }

  getAllProdutos(): Observable<Produto[]> {
    return this.http.get<Produto[]>('https://thegetset.herokuapp.com/produtos',this.token)
  }

  getByIdProduto(id: number): Observable<Produto> {
    return this.http.get<Produto>(`https://thegetset.herokuapp.com/${id}`, this.token)
  }

  getByIdProdutos(id: number): Observable<Produto> {
    return this.http.get<Produto>(`https://thegetset.herokuapp.com/${id}`, this.token)
  }

  postProduto(produto: Produto): Observable<Produto> {
    return this.http.post<Produto>('https://thegetset.herokuapp.com', produto, this.token)
  }

  putProduto(produto: Produto): Observable<Produto> {
    return this.http.put<Produto>('https://thegetset.herokuapp.com', produto, this.token)
  }

  deleteProduto(id: number) {
    return this.http.delete(`https://thegetset.herokuapp.com/${id}`, this.token)
  }

  getByNomeProduto(nome: string): Observable<Produto[]> {
    return this.http.get<Produto[]>(`https://thegetset.herokuapp.com/nome/${nome}`, this.token)
  }
}
