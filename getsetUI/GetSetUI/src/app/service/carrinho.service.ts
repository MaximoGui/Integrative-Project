import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {

  constructor() { }

  public listaCarirnho: number[] = []
  public indiceCarrinho: number = 0;

}
