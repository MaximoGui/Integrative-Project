import { Component, Input, OnInit } from '@angular/core';
import { Produto } from '../Model/Produto'

@Component({
  selector: 'app-demo-produto',
  templateUrl: './demo-produto.component.html',
  styleUrls: ['./demo-produto.component.css']
})
export class DemoProdutoComponent implements OnInit {

  @Input() produto: Produto = new Produto()


  constructor() { }

  ngOnInit(){
    window.scroll(0,0)
  }

  
}
