import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertasService } from '../service/alertas.service';
import { Produto } from '../Model/Produto'
import { ProdutosService } from '../service/produtos.service'
import { CarrinhoService } from './../service/carrinho.service';


@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent implements OnInit {

  produto: Produto = new Produto();
  carrinho: Produto[] = []
  prodId: number;
  index: number = 0
  listaCarrinho: number[] = []
  somatorioPrecos: number = 0

  constructor(
    private produtosService: ProdutosService,
    private router: Router,
    private route: ActivatedRoute,
    public carrinhoService: CarrinhoService
  ) { }

  ngOnInit() {
    window.scroll(0, 0),
      this.prodId = this.route.snapshot.params["id"],
      this.construirProdutos() 
  }

  findByIdProduto(prodId: number, indice: number) {
    this.produtosService.getByIdProduto(prodId).subscribe((resp: Produto) => {
      this.carrinho[indice] = resp
      console.log("Aqui "+ resp.nome)
      this.somatorioPrecos = this.somatorioPrecos + this.carrinho[indice].preco;
    })
  }

  construirProdutos(){
    for (let i = 0; i < this.carrinhoService.listaCarirnho.length; i++) {
      this.carrinho[i] = new Produto();
      this.findByIdProduto(this.carrinhoService.listaCarirnho[i], i)
    }
  }

}
