<p align="center">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/MaximoGui/Integrative-Project?color=%2304D361">

  <img alt="Repository size" src="https://img.shields.io/github/repo-size/MaximoGui/Integrative-Project">
  
  <a href="https://github.com/MaximoGui/Integrative-Project/commits/main">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/MaximoGui/Integrative-Project">
  </a>
    
   <img alt="License" src="https://img.shields.io/badge/license-MIT-brightgreen">
   <a href="https://github.com/MaximoGui/Integrative-Project/stargazers">
    <img alt="Stargazers" src="https://img.shields.io/github/stars/MaximoGui/Integrative-Project?style=social">
  </a>

  <a href="">
    <img alt="Feito pela GetSet" src="https://img.shields.io/badge/feito%20pela-GetSet-tomato">
  </a>
  
  <a href="">
    <img alt="Stargazers" src="https://img.shields.io/badge/Site-GetSet-tomato?style=flat&logo=ghost">
    </a>
  
 
</p>
<h1 align="center">
    <img alt="GetSet E-commerce" title="#GetSet E-commerce" src="https://youtu.be/HeL6ZsMWHNM" />
</h1>

<h4 align="center"> 
	🚧  E-commerce em desenvolvimento 🚀 🚧
</h4>

<p align="center">
 <a href="#-sobre-o-projeto">Sobre</a> •
 <a href="#-documentação-completa">Documentação</a> •
 <a href="#-funcionalidades">Funcionalidades</a> •
 <a href="#-layout">Layout</a> • 
 <a href="#-como-executar-o-projeto">Como executar</a> • 
 <a href="#-tecnologias">Tecnologias</a> • 
 <a href="#-contribuidores">Contribuidores</a> • 
 <a href="#-autor">Autor</a> • 
 <a href="#user-content--licença">Licença</a>
</p>

## 💻 Sobre o projeto

:coffee: GetSet - É uma loja virtual que repassa parte de seus lucros para o apoio a instituições educacionais voltadas à tecnologia.


Projeto desenvolvido durante o **Bootcamp Desenvolvedor Web Java Junior** oferecida pela [Generation Brasil](https://brazil.generation.org/).
A missão da Generation Brasil é apoiar jovens a construírem carreiras sustentáveis e prósperas e fornecer aos empregadores uma rede de talentos altamente qualificados e motivados, visando aprimorar os resultados de seus negócios.

---

## Documentação Completa

- <a href="#-sobre-o-projeto">Back-End</a>
- <a href="#-documentação-completa">Front-End</a>

---

## ⚙️ Funcionalidades

- [x] Clientes podem sem logar entrar em contato das seguintes formas na plataforma web enviando:
  - Uma mensagem a Getset através do E-mail na pagina de contato ou pelo chat de atendimento/chatbot

- [x] Clientes podem se cadastrar na plataforma web enviando:
  - Nome, apelido, email e senha
  
- [x] Clientes podem se logar na plataforma web enviando:
  - Email e senha
  
- [x] Clientes podem completar seus dados na pagina minha conta na plataforma web enviando:
  - Data de nascimento, telefone, cep que autocompleta rua cidade bairro e uf
  - e o endereço para que ele possa aparecer no mapa
  - além de selecionar um ou mais ítens de coleta: 

- [x] Administrador se logar na plataforma web enviando:
  - Email especial de administrador e senha
  - Tem acesso ao CRUD onde permite na loja
    - A Criação de Novos Produtos
    - Pesquisa e Leitura
    - Ediçao
    - Exclusão

- [x] Também foi implementada a API de pagamentos do Paypal, que permite realizar o pagamento com diversos tipos de cartão de crédito e com o próprio login do Paypal

- [x] É possível inserir vários produtos simultaneamente no carrinho, a partir da página de demonstração do produto (visível através do botão comprar nos cards da loja)
    
- [x] Os usuários tem acesso a uma gama e diversos dispositivos móveis porque o site é responsivo, onde podem:
  - Acessar o site com todas as funcionalidades acima desde que tenha acesso devido ao seu tipo de login seja de um usuario comum ou administrador.
  
---

## 🎨 Layout

### Mobile

<p align="center">
  <img alt="GetSet" title="#GetSet" src="https://i.imgur.com/SzMDsGW.png" width="200px">

  <img alt="GetSet" title="#GetSet" src="https://i.imgur.com/GlVwkx3.png" width="200px">
  
  <img alt="GetSet" title="#GetSet" src="https://i.imgur.com/JTLiO6r.png" width="200px">
</p>

### Web

<p align="center" style="display: flex; align-items: flex-start; justify-content: center;">
  <img alt="GetSet" title="#GetSet" src="https://i.imgur.com/M7POVNL.jpg" width="400px">

  <img alt="GetSet" title="#GetSet" src="https://i.imgur.com/qsaBiUA.jpg" width="400px">
  
  <img alt="GetSet" title="#GetSet" src="https://i.imgur.com/bhY08UH.png" width="400px">
</p>

---

## 🚀 Como executar o projeto

Este projeto é divido em duas partes:
1. Backend (getset) 
2. Frontend (getsetUI)

💡O Frontend precisa que o Backend esteja sendo executado para funcionar.

### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/). 
Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/)

#### 🎲 Rodando o Backend (servidor)

```bash

# Clone este repositório
$ git clone https://github.com/MaximoGui/Integrative-Project.git

# Acesse a pasta do projeto no terminal/cmd
$ cd Integrative-Project.git

# Abra o terminal git/cmd na pasta e digite os comandos do docker para construir o serviço
$ docker-compose up -d --build

# Use este comando para visualizar os containers criados
$ docker ps

# Pegue o container ID do primeiro container e digite após o comando:
$ docker logs ID

# Execute o Docker
$ Verifique se a imagem foi contruida com sucesso!

# O servidor inciará na porta:9000 - acesse http://localhost:9000 

```

#### 🧭 Rodando a aplicação web (Frontend)

```bash

# Clone este repositório
$ git clone https://github.com/MaximoGui/Integrative-Project.git

# Acesse a pasta do projeto no terminal/cmd
$ cd Integrative-Project.git

# Vá para a pasta server
$ cd getsetUI/GetSetUI

# Instale as dependências
$ npm install

# Execute a aplicação em modo de desenvolvimento
$ ng serve

# O servidor inciará na porta:4200 - acesse http://localhost:4200

```

---

## 🛠 Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:

#### **Website**  ([Angular](https://angular.io/)  +  [TypeScript](https://www.typescriptlang.org/))

-   **[]()**
-   **[]()**
-   **[]()**
-   **[]()**
-   **[]()**

> Veja o arquivo  [package.json](https://github.com/MaximoGui/Integrative-Project/blob/main/getsetUI/GetSetUI/package.json)

#### [](https://github.com/tgmarinho/Ecoleta#server-nodejs--typescript)**Server**  ([NodeJS](https://nodejs.org/en/)  +  [TypeScript](https://www.typescriptlang.org/))

-   **[]()**
-   **[]()**
-   **[]()**
-   **[]()**
-   **[]()**

> Veja o arquivo  [package.json](https://github.com/MaximoGui/Integrative-Project/blob/main/getsetUI/GetSetUI/package.json)

#### [](https://github.com/MaximoGui/Integrative-Project#utilit%C3%A1rios)**Utilitários**

-   Protótipo:  **[Figma](https://www.figma.com/)**, **[Canva](https://www.canva.com/pt_br/)**
-   API:  **[ViaCEP](https://viacep.com.br/)**, **[Paypal Checkout de Pagamentos](https://www.paypal.com/br/webapps/mpp/merchant-integration/)**,  **[API Jivochat - Atendimento](https://www.jivochat.com.br/api/)**, **[Chatbot - Dahi](https://dahi.ai/)**
-   Editor:  **[Visual Studio Code](https://code.visualstudio.com/)**, **[Eclipse](https://www.eclipse.org/)**
-   Markdown:  **[Markdown Emoji](https://gist.github.com/rxaviers/7360908)**
-   Teste de API:  **[Postman](https://www.postman.com/)**
-   Ícones:  **[Font Awesome](https://fontawesome.com/)**
-   Fontes:  **[Ubuntu](https://fonts.google.com/specimen/Ubuntu)**,  **[Roboto](https://fonts.google.com/specimen/Roboto)**

---

## 👨‍💻 Contribuidores

💜 Um super thanks 👏 para essa galera que fez esse e-commerce sair do campo da ideia e coloca-lo no ar :)

<table>
  <tr>
    <td align="center"><a href="https://github.com/Rubenscode"><img style="border-radius: 50%;" src="https://avatars2.githubusercontent.com/u/40808539?v=4" width="100px;" alt=""/><br /><sub><b>Rubens Almeida</b></sub></a><br /><a href="https://thegetset.herokuapp.com/" title="GetSet">👨‍🚀 :alien:</a></td>
    <td align="center"><a href="https://github.com/MarcusViniciusO"><img style="border-radius: 50%;" src="https://avatars1.githubusercontent.com/u/72392984?v=4" width="100px;" alt=""/><br /><sub><b>Marcus Vinicius</b></sub></a><br /><a href="https://thegetset.herokuapp.com/" title="GetSet">:bulb: :floppy_disk:</a></td>
    <td align="center"><a href="https://github.com/andersonlima07"><img style="border-radius: 50%;" src="https://avatars0.githubusercontent.com/u/72565077?v=4" width="100px;" alt=""/><br /><sub><b>Anderson Lima</b></sub></a><br /><a href="https://thegetset.herokuapp.com/" title="GetSet">👨‍🚀</a></td>
    <td align="center"><a href="https://github.com/MaximoGui"><img style="border-radius: 50%;" src="https://avatars3.githubusercontent.com/u/72393702?v=4" width="100px;" alt=""/><br /><sub><b>Guilherme Maximo</b></sub></a><br /><a href="https://thegetset.herokuapp.com/" title="GetSet">:trollface: :books:</a></td>
    <td align="center"><a href="https://github.com/MateusBCC020"><img style="border-radius: 50%;" src="https://avatars3.githubusercontent.com/u/61809283?v=4" width="100px;" alt=""/><br /><sub><b>Mateus Ribeiro</b></sub></a><br /><a href="https://thegetset.herokuapp.com/" title="GetSet">:octocat: :musical_note:</a></td> 
  </tr>
</table>

## 💪 Como contribuir para o projeto

1. Faça um **fork** do projeto.
2. Crie uma nova branch com as suas alterações: `git checkout -b my-feature`
3. Salve as alterações e crie uma mensagem de commit contando o que você fez: `git commit -m "feature: My new feature"`
4. Envie as suas alterações: `git push origin my-feature`
> Caso tenha alguma dúvida confira este [guia de como contribuir no GitHub](./CONTRIBUTING.md)

---

## 🦸 Autor
  
<a href="https://github.com/Rubenscode">
 <img style="border-radius: 50%;" src="https://avatars2.githubusercontent.com/u/40808539?v=4" width="100px;" alt=""/>
 <br />
 <sub><b>Rubens Almeida</b></sub></a> <a href="https://github.com/Rubenscode" title="GetSet">🚀</a>
 <br />

[![Github Badge](https://img.shields.io/badge/-Github-000?style=flat-square&logo=Github&logoColor=white&link=https://github.com/Rubenscode)](https://github.com/Rubenscode)
[![Linkedin Badge](https://img.shields.io/badge/-LinkedIn-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/rubens-almeida-andrade/)](https://www.linkedin.com/in/rubens-almeida-andrade/)
[![Gmail Badge](https://img.shields.io/badge/-Gmail-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:rubens.andrade1@gmail.com)](mailto:rubens.andrade1@gmail.com)<br>

---

## 📝 Licença

Este projeto esta sobe a licença [MIT](./LICENSE).

Feito por Rubens Almeida 👋🏽 [Entre em contato!](https://www.linkedin.com/in/rubens-almeida-andrade/)

<p><a href="#-sobre-o-projeto"><g-emoji class="g-emoji" alias="arrow_up" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/2b06.png">⬆</g-emoji> Voltar ao topo</a><br></p>

---