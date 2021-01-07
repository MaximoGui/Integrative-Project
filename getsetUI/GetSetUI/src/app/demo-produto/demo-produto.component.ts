import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Categoria } from '../Model/Categoria';
import { Produto } from '../Model/Produto'
import { AuthService } from '../service/auth.service';
import { CategoriaService } from '../service/categoria.service';
import { ProdutosService } from '../service/produtos.service';

@Component({
  selector: 'app-demo-produto',
  templateUrl: './demo-produto.component.html',
  styleUrls: ['./demo-produto.component.css']
})
export class DemoProdutoComponent implements OnInit {

  key ='data';
  reverse = true;
  
  produto: Produto = new Produto();
  listaProdutos: Produto[];
  prodId: number;
  index: number = 0;

  categoria: Categoria = new Categoria();
  prodCategorias: Categoria[];
  categoriaId: number;


  constructor(
    private categoriaService: CategoriaService,
    private produtoService: ProdutosService,
    private route: ActivatedRoute,
    public auth: AuthService
  ) { }

  ngOnInit() {
    window.scroll(0, 0),
      this.prodId = this.route.snapshot.params["id"],
      this.findByIdProduto(this.prodId)

      this.categoriaId = this.route.snapshot.params["id"],
      this.findByIdCategoria(this.categoriaId)

    
      this.findProdutoByCategoria(this.categoriaId)
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

  findAllCategorias() {
    this.categoriaService.getAllCategorias().subscribe((resp: Categoria[]) => {
      this.prodCategorias = resp
    })
  }

  findByNomeCategoria() {
      this.categoriaService.getByNomeCategoria(this.produto.categoria.nome).subscribe((resp: Categoria[]) => {
        this.prodCategorias = resp;
      })
    } 

    findProdutoByCategoria(categoriaId: number) {
      this.categoriaService.getByIdCategoria(categoriaId).subscribe((resp: Categoria) => {
        this.listaProdutos = resp.produto;
      })
    }
  }



