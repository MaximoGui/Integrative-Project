import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Categoria } from '../Model/Categoria';
import { Produto } from '../Model/Produto'
import { AlertasService } from '../service/alertas.service';
import { AuthService } from '../service/auth.service';
import { CategoriaService } from '../service/categoria.service';
import { ProdutosService } from '../service/produtos.service';

@Component({
  selector: 'app-demo-produto',
  templateUrl: './demo-produto.component.html',
  styleUrls: ['./demo-produto.component.css']
})
export class DemoProdutoComponent implements OnInit {

  produto: Produto = new Produto();
  ListaProdutos: Produto[];
  prodId: number;

  categoria: Categoria = new Categoria();
  listaCategorias: Categoria[];
  categoriaId: number


  constructor(
    private categoriaService: CategoriaService,
    private produtoService: ProdutosService,
    private router: Router,
    private alert: AlertasService,
    private route: ActivatedRoute,
    public auth: AuthService
  ) { }

  ngOnInit() {
    window.scroll(0, 0),
      this.prodId = this.route.snapshot.params["id"],
      this.findByIdProduto(this.prodId)

    this.categoriaId = this.route.snapshot.params["id"],
      this.findByIdCategoria(this.categoriaId)
  }

  findByIdProduto(idProd: number) {
    this.produtoService.getByIdProdutos(idProd).subscribe((resp: any = Produto) => {
      this.produto = resp
    })
  }

  findByIdCategoria(categoriaId: number) {
    this.categoriaService.getByIdCategoria(categoriaId).subscribe((resp: Categoria) => {
      this.categoria = resp;
    })
  }

}

