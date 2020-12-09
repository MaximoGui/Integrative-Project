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
    headers: new HttpHeaders().set('Authorization',
    localStorage.getItem('token')!)
  }

  getAllCategorias(): Observable<Categoria[]> {
    return this.http.get<Categoria[]>('http://localhost:9000/categorias', this.token)
  }

  getByIdCategorias(id: number): Observable<Categoria> {
    return this.http.get<Categoria>('http://localhost:9000/tema/${id}', this.token)
  }

  postCategorias(categoria: Categoria): Observable<Categoria> {
    return this.http.post<Categoria>('http://localhost:9000/categorias', categoria, this.token)
  }
} 