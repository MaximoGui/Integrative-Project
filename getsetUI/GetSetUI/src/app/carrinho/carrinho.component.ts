import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertasService } from '../service/alertas.service';
import { Produto } from '../Model/Produto'
import { ProdutosService } from '../service/produtos.service'


@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent implements OnInit {

  produto: Produto = new Produto();
  carrinho: Produto[];
  prodId: number;
  index: number = 1

  constructor(
    private produtosService: ProdutosService,
    private router: Router,
    private route: ActivatedRoute,
    private alert: AlertasService
  ) { }

  ngOnInit() {
    window.scroll(0, 0),
      this.prodId = this.route.snapshot.params["id"],
      this.findByIdProduto(this.prodId)
  }

  findByIdProduto(prodId: number) {
    this.produtosService.getByIdProduto(prodId).subscribe((resp: Produto) => {
      this.produto = resp
    })

  }

  addCarrinho() {
    this.carrinho[this.index] = new Produto()
    this.carrinho[this.index].id = this.prodId
    
    console.log("Seus produtos " + this.carrinho[this.index].id)
    this.index++
  }

}
