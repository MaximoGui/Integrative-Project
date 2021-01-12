import { Component, OnInit, VERSION } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Produto } from '../Model/Produto'
import { ProdutosService } from '../service/produtos.service'
import { CarrinhoService } from './../service/carrinho.service';
import { ViaCepService } from '../service/via-cep.service';


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
  listaPrecos: number[] = []
  teste: number = 0  

  constructor(
    private produtosService: ProdutosService,
    private route: ActivatedRoute,
    public carrinhoService: CarrinhoService,
    private viaCep: ViaCepService

  ) { }

  ngOnInit() {
    window.scroll(0, 0),
      this.prodId = this.route.snapshot.params["id"],
      this.construirProdutos() 
  }

  findByIdProduto(prodId: number, indice: number) {
    this.produtosService.getByIdProduto(prodId).subscribe((resp: Produto) => {
      this.carrinho[indice] = resp
      this.listaPrecos[indice] = resp.preco
      console.log(resp.preco)
      this.somatorioPrecos = Math.round(this.somatorioPrecos + this.carrinho[indice].preco);
    })
  }

  construirProdutos(){
    for (let i = 0; i < this.carrinhoService.listaCarirnho.length; i++) {
      this.carrinho[i] = new Produto();
      this.findByIdProduto(this.carrinhoService.listaCarirnho[i], i)
    }
  }



  name = 'Angular ' + VERSION.major;
  value = 1;

  handleMinus(indice: number) {
    console.log("Aqui" + this.teste)
    if(this.teste  === 0){
      this.produtosService.getByIdProduto(indice).subscribe((resp: Produto) => {
        this.produto = resp
        this.somatorioPrecos = this.somatorioPrecos - resp.preco;
      })
      this.value--;
    }
    this.teste++;
    console.log("teste: "+ this.teste +" Tamanho: " + this.carrinhoService.listaCarirnho.length)
    console.log("----------------------------")
    if(this.teste  === this.carrinhoService.listaCarirnho.length){
      this.teste = 0;
    }
  }

  handlePlus(indice: number) {
    console.log("Aqui" + this.teste)
    if(this.teste  === 0){
      this.produtosService.getByIdProduto(indice).subscribe((resp: Produto) => {
        this.produto = resp
        this.somatorioPrecos = this.somatorioPrecos + resp.preco;
      })
      this.value++;
    } 
    this.teste++;
    console.log("teste: "+ this.teste +" Tamanho: " + this.carrinhoService.listaCarirnho.length)
    console.log("----------------------------")
    if(this.teste  === this.carrinhoService.listaCarirnho.length){
      this.teste = 0;
    }
  }

  consultaCep(valor: any, form: any){
    this.viaCep.buscar(valor).subscribe((dados: any) => this.populaForm(dados,form));
  }

  populaForm(dados: any, form: any){
    form.setValue({
      cep: dados.cep,
      logradouro: dados.logradouro,
      bairro: dados.bairro,
      cidade: dados.localidade,
      uf: dados.uf
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
