import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Categoria } from '../Model/Categoria';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  constructor(private http: HttpClient) { }

  token = {
    headers: new HttpHeaders().set('Authorization',localStorage.getItem('token')!)
  }

  getAllCategorias(): Observable<Categoria[]> {
    return this.http.get<Categoria[]>('https://app-getset.heroku.com/categorias',this.token)
  }

  getByIdCategoria(id: number): Observable<Categoria> {
    return this.http.get<Categoria>(`https://app-getset.heroku.com/categorias/${id}`,this.token)
  }

  postCategoria(categoria: Categoria): Observable<Categoria> {
    return this.http.post<Categoria>('https://app-getset.heroku.com/categorias', categoria, this.token)
  }

  putCategoria(categoria: Categoria): Observable<Categoria> {
    return this.http.put<Categoria>('https://app-getset.heroku.com/categorias',categoria, this.token)
  }

  deleteCategoria(id: number) {
    return this.http.delete(`https://app-getset.heroku.com/categorias/${id}`, this.token)
  }

  getByNomeCategoria(nome: string): Observable<Categoria[]> {
    return this.http.get<Categoria[]>(`https://app-getset.heroku.com/categorias/nome/${nome}`, this.token)
  }
} 