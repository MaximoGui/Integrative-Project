import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Categoria } from '../Model/Categoria';
import { Produto } from '../Model/Produto'
import { AlertasService } from '../service/alertas.service';
import { AuthService } from '../service/auth.service';
import { CategoriaService } from '../service/categoria.service';
import { ProdutosService } from '../service/produtos.service';
import { CarrinhoService } from './../service/carrinho.service';

@Component({
  selector: 'app-demo-produto',
  templateUrl: './demo-produto.component.html',
  styleUrls: ['./demo-produto.component.css']
})
export class DemoProdutoComponent implements OnInit {

  produto: Produto = new Produto();
  listaProdutos: Produto[];
  prodId: number;
  nomeProduto: string;

  categoria: Categoria = new Categoria();
  listaCategorias: Categoria[];
  categoriaId: number;
  nomeCategoria: string;
  listCat: Categoria [];


  constructor(
    private categoriaService: CategoriaService,
    private produtoService: ProdutosService,
    private router: Router,
    private alert: AlertasService,
    private route: ActivatedRoute,
    public auth: AuthService,
    public carrinhoService: CarrinhoService
  ) { }

  ngOnInit() {
    window.scroll(0, 0),
      this.prodId = this.route.snapshot.params["id"],
      this.findByIdProduto(this.prodId)

      this.categoriaId = this.route.snapshot.params["id"],
      this.findByIdCategoria(this.categoriaId)

      this.findAllCategorias()

  }

  findByIdProduto(idProd: number) {
    this.produtoService.getByIdProduto(idProd).subscribe((resp: any = Produto) => {
      this.produto = resp
    })
  }

  findByIdCategoria(categoriaId: number) {
    this.categoriaService.getByIdCategoria(categoriaId).subscribe((resp: Categoria) => {
      this.categoria = resp;
    })
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

  findByNomeCategoria() {
    if (this.nomeCategoria === '') {
      this.findAllCategorias()
    } else {
      this.categoriaService.getByNomeCategoria(this.nomeCategoria).subscribe((resp: Categoria[]) => {
        this.listaCategorias = resp;
      })
    } 
  }

  btnComprar(idProd: number) {
    if(this.produto.estoque > 1){
      this.produto.estoque--;
      this.produtoService.putProduto(this.produto).subscribe((resp: Produto) => {
        this.produto = resp
        this.router.navigate(['/produtos'])
        this.alert.showAlertSuccess('Compra realizada!')
      }, err => {
        if (err.status =='500'){
          this.alert.showAlertDanger('Preencha todos os campos corretamente antes de enviar!')
        }
      })
    }else{
      this.produtoService.deleteProduto(this.produto.id).subscribe(() => {
        this.router.navigate(['/home'])
      })
    }
  }

  btnCarrinho(){
    this.carrinhoService.listaCarirnho[this.carrinhoService.indiceCarrinho] = this.prodId;
    this.carrinhoService.indiceCarrinho++;
  }

}

