import { Component, OnInit, VERSION } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Produto } from '../Model/Produto'
import { ProdutosService } from '../service/produtos.service'


@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent implements OnInit {

  produto: Produto = new Produto();
  carrinho: Produto[] = []
  prodId: number;
  index: number = 1

  constructor(
    private produtosService: ProdutosService,
    private route: ActivatedRoute,
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

  name = 'Angular ' + VERSION.major;
  value = 0;

  handleMinus() {
    this.value--;  
  }
  handlePlus() {
    this.value++;    
  }
  

}
