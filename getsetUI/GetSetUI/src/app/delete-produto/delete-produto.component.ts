import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Produto } from '../Model/Produto';
import { ProdutosService } from '../service/produtos.service';

@Component({
  selector: 'app-delete-produto',
  templateUrl: './delete-produto.component.html',
  styleUrls: ['./delete-produto.component.css']
})
export class DeleteProdutoComponent implements OnInit {

  produto: Produto = new Produto()

  constructor(
    private produtoService: ProdutosService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    window.scroll(0, 0)
    let id: number = this.route.snapshot.params['id'];
    this.findByIdProduto(id);
  }

  findByIdProduto(id: number) {
    this.produtoService.getByIdProduto(id).subscribe((resp: Produto) => {
      this.produto = resp
    })

  }

  btnSim() {
    this.produtoService.deleteProduto(this.produto.id).subscribe(() => {
      this.router.navigate(['/home'])
      alert('Produto apagado com sucesso!')
    })
  }

  btnNao() {
    this.router.navigate(['/home'])

  }
}
