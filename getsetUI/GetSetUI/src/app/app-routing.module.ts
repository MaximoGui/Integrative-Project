import { DemoProdutoComponent } from './demo-produto/demo-produto.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContatoComponent } from './contato/contato.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CadastroComponent} from './cadastro/cadastro.component'
import { CategoriasComponent} from './categorias/categorias.component'
import { PostCategoriasComponent } from './post-categorias/post-categorias.component';
import { PutProdutoComponent } from './put-produto/put-produto.component';
import { PutCategoriaComponent } from './put-categoria/put-categoria.component';
import { DeleteProdutoComponent } from './delete-produto/delete-produto.component';
import { DeleteCategoriaComponent } from './delete-categoria/delete-categoria.component';
import { AboutComponent } from './about/about.component';
import { CarrinhoComponent } from './carrinho/carrinho.component';
import { ProdutosComponent } from './produtos/produtos.component';
import { LoginSocialComponent } from './login-social/login-social.component';


const routes: Routes = [
  {path:'', redirectTo: 'home', pathMatch:'full'},
  {path:'home', component: HomeComponent},
  {path:'contato', component: ContatoComponent},
  {path:'login', component: LoginComponent},
  {path:'cadastro', component: CadastroComponent},
  {path:'categorias', component: CategoriasComponent},
  {path:'produtos', component: ProdutosComponent},
  {path:'cadastro-categorias', component: PostCategoriasComponent},
  {path:'editar-produto/:id', component: PutProdutoComponent},
  {path:'editar-categoria/:id', component: PutCategoriaComponent},
  {path:'delete-produto/:id', component: DeleteProdutoComponent},
  {path:'delete-categoria/:id', component: DeleteCategoriaComponent},
  {path:'about', component: AboutComponent},
  {path:'carrinho', component: CarrinhoComponent},
  {path:'demo-produto', component: DemoProdutoComponent},
  {path:'login-social', component: LoginSocialComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
