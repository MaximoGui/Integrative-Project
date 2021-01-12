import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2'
import { Produto } from '../Model/Produto';
import { AlertasService } from '../service/alertas.service';
import { ProdutosService } from '../service/produtos.service';

declare var paypal: { Buttons: (arg0: { createOrder: (data: any, actions: any) => any; onApprove: (data: any, actions: any) => Promise<void>; onError: (err: any) => void; }) => { (): any; new(): any; render: { (arg0: any): void; new(): any; }; }; };

@Component({
  selector: 'app-pagamento',
  templateUrl: './pagamento.component.html',
  styleUrls: ['./pagamento.component.css']
})
export class PagamentoComponent implements OnInit {

  @ViewChild('paypal', { static: true }) paypalElement!: ElementRef;

  product = {
    price: 59.99,
    description: 'Caneca',
  }

  produto: Produto = new Produto()

  paidFor = false

  constructor(
    private produtoService: ProdutosService,
    private alert: AlertasService,
    private router: Router

  ) { }

  ngOnInit() {

    paypal.Buttons({
      createOrder: (data: any, actions: any) => {
        return actions.order.create({
          purchase_units: [{
            description: this.product.description,
            amount: {
              currency_code: 'BRL',
              value: this.product.price
            }
          }]
        })
      },
      onApprove: async (data: any, actions: any) => {
        const order = await actions.order.capture()
        this.paidFor = true,
          console.log(order)
      },
      onError: (err: any) => {
        console.log(err)
      }
    })
      .render(this.paypalElement.nativeElement)
  }

  qrcodeAlert() {
    Swal.fire({
     title: 'Seu pedido foi enviado!',
     text: 'Apresente esse QR Code em qualquer uma de nossas lojas para finalizar o pagamento e retirar seu pedido',
      imageUrl: 'https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=http://localhost:8080',
     imageWidth: 250,
     imageHeight: 250,
      imageAlt: 'QR Code',
      footer: 'Esse QR Code foi enviado para seu email'
    })
  }

  btnComprar(idProd: number) {
    if(this.produto.estoque > 1){
      this.produto.estoque--;
      this.produtoService.putProduto(this.produto).subscribe((resp: Produto) => {
        this.produto = resp
        this.router.navigate(['/produtos'])
        this.alert.showAlertSuccess('Compra realizada!')
      }, err => {
        if (err.status =='500'){
          this.alert.showAlertDanger('Preencha todos os campos corretamente antes de enviar!')
        }
      })
    }else{
      this.produtoService.deleteProduto(this.produto.id).subscribe(() => {
        this.router.navigate(['/home'])
      })
    }
  }

}
