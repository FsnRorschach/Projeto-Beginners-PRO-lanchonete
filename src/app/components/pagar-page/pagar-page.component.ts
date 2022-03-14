import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as $ from 'jquery';

@Component({
  selector: 'app-pagar-page',
  templateUrl: './pagar-page.component.html',
  styleUrls: ['./pagar-page.component.scss']
})
export class PagarPageComponent implements OnInit {

  comprasLocalStorage: any = [];
  compraFechada: any = [];
  hotDog: number = 0;
  xtudo: number = 0;

  textModal: string = '';

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.carregaCarrinho();
    this.verificaPedido();
    this.blockCarrinho();
  }

  carregaCarrinho(): void {
    this.comprasLocalStorage = JSON.parse(localStorage.getItem('compras') as string);
    console.log(this.comprasLocalStorage);
    this.hotDog = this.comprasLocalStorage.hotdog ? this.comprasLocalStorage.hotdog : 0;
    this.xtudo = this.comprasLocalStorage.xtudo ? this.comprasLocalStorage.xtudo : 0;
    this.blockCarrinho();
  }

  blockCarrinho() {
    if (this.xtudo == 0 && this.hotDog == 0) {
      $('#btnpagar-pagar-page').prop('disabled', true);
      this.comprasLocalStorage = [];
      localStorage.setItem("compras", JSON.stringify(this.comprasLocalStorage));
    } else {
      $('#btnpagar-pagar-page').prop('disabled', false);
    }
  }

  verificaPedido() {
    if (this.comprasLocalStorage == '') {
      console.log("Entrou na função verifica array");
      $('#modal-paga-page').modal('show');
      this.textModal = "Carrinho vazio 😔🍔🍔"
      this.goToHomePage();
    }
  }

  goToHomePage() {
    this.router.navigate(['']);
  }

  pagar() {
    console.log("Entrou no comprar lanche");
    $('#modal-paga-page').modal('show');
    this.textModal = "Pagamento efetuado com Sucesso! Bom apetite. 🥳	🍔";
    this.hotDog = 0;
    this.xtudo = 0;
    localStorage.setItem("compras", JSON.stringify(''));
    this.blockCarrinho();
    setTimeout(() => {
      this.goToHomePage();
    }, 5000);
  }

  cancelar() {
    console.log("Entrou no cancelar pedido");
    this.hotDog = 0;
    this.xtudo = 0;
    localStorage.setItem("compras", JSON.stringify(''));
    this.blockCarrinho();
    this.goToHomePage();
  }
}


