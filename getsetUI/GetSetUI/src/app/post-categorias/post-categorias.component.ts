import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Categoria } from '../Model/Categoria';
import { AlertasService } from '../service/alertas.service';
import { CategoriaService } from '../service/categoria.service';

@Component({
  selector: 'app-post-categorias',
  templateUrl: './post-categorias.component.html',
  styleUrls: ['./post-categorias.component.css']
})
export class PostCategoriasComponent implements OnInit {

  categoria: Categoria = new Categoria();
  listaCategorias: Categoria[];

  constructor(
    private categoriaService: CategoriaService,
    private router: Router,
    private alert: AlertasService
  ) { }

  ngOnInit() {
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

  cadastrar() {
    if(this.categoria.nome == null) {
      this.alert.showAlertDanger('Preencha o campo de nome de categoria corretamente!')
    }else{
      this.categoriaService.postCategoria(this.categoria).subscribe((resp: Categoria) =>{
      this.categoria = resp
      this.router.navigate(['/categorias']) 
      this.alert.showAlertSuccess('Categoria cadastrada com sucesso!') 
      })
    }
  }

}
