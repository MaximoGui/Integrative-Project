import { Component, OnInit } from '@angular/core';
import { Categoria } from '../Model/Categoria';
import { Produto } from '../Model/Produto';
import { CategoriaService } from '../service/categoria.service';
import { ProdutosService } from '../service/produtos.service';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent implements OnInit {

  key ='data';
  reverse = true;
  
  categoria: Categoria = new Categoria();
  listaCategorias: Categoria[];
  idCategoria: number

  produto: Produto = new Produto();
  listaProdutos: Produto[];
  
  constructor(
    private produtoService: ProdutosService,
    private categoriaService: CategoriaService
  ) { }

  ngOnInit() {
    window.scroll(0,0)

    this.findAllProdutos()
    this.findAllCategorias()
  }

  publicar() {
    this.categoria.id = this.idCategoria;
    this.produto.categoria = this.categoria;

    if (this.produto.nome == null ||  this.produto.categoria == null) {
      alert('Preencha todos os campos antes de publicar!')
    } else {
      this.produtoService.postProduto(this.produto).subscribe((resp: Produto) => {
        this.produto = resp;
        this.produto = new Produto()
        alert('Produto cadastrado com sucesso!')
        this.findAllProdutos()
      })
    }
  }

  findAllProdutos() {
    this.produtoService.getAllProdutos().subscribe((resp: Produto[]) => {
      this.listaProdutos = resp
      console.log("lista de produtos "+JSON.stringify(this.listaProdutos))
    })
  }

  findAllCategorias() {
    this.categoriaService.getAllCategorias().subscribe((resp: Categoria[]) => {
      this.listaCategorias = resp
    })
  }

  findByIdCategorias() {
    this.categoriaService.getByIdCategoria(this.idCategoria).subscribe((resp: Categoria) => {
      this.categoria =resp;
    })
  }
}
