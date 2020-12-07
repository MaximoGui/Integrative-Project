import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(
    public auth: AuthService,
    public router: Router
  ) { }

  ngOnInit(){
  }

  sair() {
    this.router.navigate(['/login'])
    localStorage.clear()
  }

}
