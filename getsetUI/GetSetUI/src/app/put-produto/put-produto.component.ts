import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Categoria } from '../Model/Categoria';
import { Produto } from '../Model/Produto';
import { CategoriaService } from '../service/categoria.service';
import { ProdutosService } from '../service/produtos.service';

@Component({
  selector: 'app-put-produto',
  templateUrl: './put-produto.component.html',
  styleUrls: ['./put-produto.component.css']
})
export class PutProdutoComponent implements OnInit {

  produto: Produto = new Produto()
  idProduto: number

  categoria: Categoria = new Categoria()
  listaCategorias: Categoria[]
  idCategoria: number
  
  constructor(
    private categoriaService: CategoriaService,
    private produtoService: ProdutosService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    window.scroll(0,0)

    this.idCategoria = this.route.snapshot.params["id"]
    this.findByIdProduto(this.idProduto)

    this.findAllCategorias()
  }

  findByIdProduto(id: number) {
    this.produtoService.getByIdProduto(id).subscribe((resp: Produto) => {
      this.produto = resp
    })
  }

  salvar() {
    this.categoria.id = this.idCategoria
    this.produto.categoria = this.categoria

    this.produtoService.putProduto(this.produto).subscribe((resp: Produto) => {
      this.produto = resp
      this.router.navigate(['/categorias'])
    }, err => {
      if (err.status =='500'){
        alert('Preencha todos os campos corretamente antes de enviar!')
      }
    })
  }

  findAllCategorias() {
    this.categoriaService.getAllCategorias().subscribe((resp: Categoria[]) => {
      this.listaCategorias = resp
    })
  }

  findByIdCategoria() {
    this.categoriaService.getByIdCategoria(this.categoria.id).subscribe((resp: Categoria) => {
      this.categoria =resp;
    })
  }
}
