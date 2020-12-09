import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContatoComponent } from './contato/contato.component';
import { HomeComponent } from './home/home.component';
import {LoginComponent } from './login/login.component';
import {CadastroComponent} from './cadastro/cadastro.component'
import {CategoriasComponent} from './categorias/categorias.component'
import { PostCategoriasComponent } from './post-categorias/post-categorias.component';

const routes: Routes = [
  {path:'', redirectTo: 'home', pathMatch:'full'},
  {path:'home', component: HomeComponent},
  {path:'contato', component: ContatoComponent},
  { path: 'login', component: LoginComponent},
  { path: 'cadastro', component: CadastroComponent},
  { path: 'categorias', component: CategoriasComponent},
  {path: 'cadastro-categorias', component: PostCategoriasComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
