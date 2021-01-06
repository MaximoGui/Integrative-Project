import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { OrderModule } from 'ngx-order-pipe';
import { ModalModule } from 'ngx-bootstrap/modal';
import { SocialLoginModule, SocialAuthServiceConfig } from 'angularx-social-login';
import { GoogleLoginProvider } from 'angularx-social-login';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ContatoComponent } from './contato/contato.component';
import { LoginComponent } from './login/login.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { CategoriasComponent } from './categorias/categorias.component';
import { PostCategoriasComponent } from './post-categorias/post-categorias.component';
import { DeleteProdutoComponent } from './delete-produto/delete-produto.component';
import { DeleteCategoriaComponent } from './delete-categoria/delete-categoria.component';
import { PutProdutoComponent } from './put-produto/put-produto.component';
import { PutCategoriaComponent } from './put-categoria/put-categoria.component';
import { AlertasComponent } from './alertas/alertas.component';
import { AboutComponent } from './about/about.component';
import { CarrinhoComponent } from './carrinho/carrinho.component';
import { ProdutosComponent } from './produtos/produtos.component';
import { DemoProdutoComponent } from './demo-produto/demo-produto.component';
import { LoginSocialComponent } from './login-social/login-social.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    NavbarComponent,
    ContatoComponent,
    LoginComponent,
    CadastroComponent,
    CategoriasComponent,
    PostCategoriasComponent,
    DeleteProdutoComponent,
    DeleteCategoriaComponent,
    PutProdutoComponent,
    PutCategoriaComponent,
    AlertasComponent,
    AboutComponent,
    CarrinhoComponent,
    ProdutosComponent,
    DemoProdutoComponent,
    LoginSocialComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
    OrderModule,
    SocialLoginModule,
    ModalModule.forRoot()
  ],
  providers: [
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: true,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              '1079583727679-mv59s7j1nhe8s2jrfpn50jbr8g3qjruo.apps.googleusercontent.com'
            )
          },
        ]
      } as SocialAuthServiceConfig,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
