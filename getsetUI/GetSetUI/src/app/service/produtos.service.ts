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

  postProdutos(produto: Produto): Observable<Produto> {
    return this.http.post<Produto>('http://localhost:9000/produtos', produto, this.token)
  }
}
