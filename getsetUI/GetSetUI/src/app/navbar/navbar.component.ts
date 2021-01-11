import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Usuario } from '../Model/Usuario';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  apelido = environment.apelido

  constructor(
    public auth: AuthService,
    public router: Router
  ) { }

  ngOnInit(){
    window.scroll(0,0)
  }

  sair() {
    this.router.navigate(['/login'])
    environment.token = ''
    environment.admin = false
  }

}
