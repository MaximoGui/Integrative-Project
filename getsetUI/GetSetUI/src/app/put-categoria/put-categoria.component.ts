import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'
import { Categoria } from '../Model/Categoria'
import { AlertasService } from '../service/alertas.service';
import { CategoriaService } from '../service/categoria.service'


@Component({
  selector: 'app-put-categoria',
  templateUrl: './put-categoria.component.html',
  styleUrls: ['./put-categoria.component.css']
})
export class PutCategoriaComponent implements OnInit {

  categoria: Categoria = new Categoria()
  listaCategoria: Categoria[]

  constructor(
    private categoriaService: CategoriaService,
    private router: Router,
    private route: ActivatedRoute,
    private alert: AlertasService
  ) { }

  ngOnInit() {
    this.findAllCategoria()
  }

  findAllCategoria(){
    this.categoriaService.getAllCategorias().subscribe((resp: Categoria[]) =>{
      this.listaCategoria = resp
    })
  }
  findByIdCategoria() {
    this.categoriaService.getByIdCategoria(this.categoria.id).subscribe((resp: Categoria) =>{
      this.categoria = resp
    })
  }

  salvar() {
    this.categoriaService.putCategoria(this.categoria).subscribe((resp: Categoria) => {
      this.categoria = resp
      this.router.navigate(['/produtos'])
      this.alert.showAlertSuccess('Tema atualizado com sucesso!')
    })
  }
}
