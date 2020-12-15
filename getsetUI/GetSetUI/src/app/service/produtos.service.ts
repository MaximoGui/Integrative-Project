import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Produto } from '../Model/Produto';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  constructor(private http: HttpClient) { }

  token = {
    headers: new HttpHeaders().set('Authorization', localStorage.getItem('token')!)
  }

  getAllProdutos(): Observable<Produto[]> {
    return this.http.get<Produto[]>('http://localhost:9000/produtos', this.token)
  }

  getByIdProduto(id: number): Observable<Produto> {
    return this.http.get<Produto>(`http://localhost:9000/produtos/${id}`, this.token)
  }

  postProduto(produto: Produto): Observable<Produto> {
    return this.http.post<Produto>('http://localhost:9000/produtos', produto, this.token)
  }

  putProduto(produto: Produto): Observable<Produto> {
    return this.http.put<Produto>('http://localhost:9000/produtos', produto, this.token)
  }

  deleteProduto(id: number) {
    return this.http.delete(`http://localhost:9000/produtos/${id}`, this.token)
  }

  getByNomeProduto(nome: string): Observable<Produto[]> {
    return this.http.get<Produto[]>(`http://localhost:9000/produtos/nome/${nome}`, this.token)
  }
}
