import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserLogin } from '../Model/UserLogin';
import { AlertasService } from '../service/alertas.service';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent implements OnInit {

  user: UserLogin = new UserLogin();
  
  constructor(
    private alert: AlertasService,
    private router: Router,
    
  ) { }

  ngOnInit(){
    window.scroll(0,0)
  }

  publicar() {
    if(this.user.email == '') {
      this.alert.showAlertDanger('Preencha todos os campos corretamente!')
    }else{
      this.router.navigate(['/home'])
      this.alert.showAlertSuccess('Mensagem enviada!')
    }
  }
}
