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

  produto: Produto = new Produto()

  constructor(
    private produtosService: ProdutosService,
    private router: Router,
    private route: ActivatedRoute,
    private alert: AlertasService
  ) { }

  ngOnInit() {
    window.scroll(0, 0)
    let id: number = this.route.snapshot.params['id'];
    this.findByIdProduto(id);
  }

  findByIdProduto(id: number) {
    this.produtosService.getByIdProduto(id).subscribe((resp: Produto) => {
      this.produto = resp
    })

  }

  btnSim(){
    this.produtosService.putProduto(this.produto).subscribe(() =>{
      this.router.navigate(['/home'])
      this.alert.showAlertSuccess ('Parabéns pela sua compra e obrigado por nos ajudar!!!')
    })
  }

  btnNao(){
    this.router.navigate(['/home'])
    this.alert.showAlertSuccess ('Continue olhando nossos produtos.')
  }

}
