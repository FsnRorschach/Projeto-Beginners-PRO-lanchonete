import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as $ from 'jquery';

@Component({
  selector: 'app-cardapio-page',
  templateUrl: './cardapio-page.component.html',
  styleUrls: ['./cardapio-page.component.scss']
})
export class CardapioPageComponent implements OnInit {

  compraStorage: any = [];
  hotdog: number = 0;
  xtudo: number = 0;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.carregaCarrinho();
    this.blockCarrinho();
  }

  compraHotDog(): void {
    this.hotdog += 1;
    this.blockCarrinho();
    this.compraStorage = {
      hotdog: this.hotdog,
      xtudo: this.xtudo
    }
    this.setLocalStorage();
  }

  comprarXtudo(): void {
    this.xtudo += 1;
    this.blockCarrinho();
    this.compraStorage = {
      hotdog: this.hotdog,
      xtudo: this.xtudo
    }
    this.setLocalStorage();
  }

  removeItemX(): void {
    this.xtudo -= 1;
    this.xtudo = this.xtudo >= 0 ? this.xtudo : 0;
    this.blockCarrinho();
  }

  blockCarrinho() {
    if (this.xtudo == 0 && this.hotdog == 0) {
      $('#btnfinaliza-cardapio-page').prop('disabled', true);
      this.compraStorage = [];
      localStorage.setItem("compras", JSON.stringify(this.compraStorage));
    } else {
      $('#btnfinaliza-cardapio-page').prop('disabled', false);
    }
  }

  removeItemH(): void {
    this.hotdog -= 1;
    this.hotdog = this.hotdog >= 0 ? this.hotdog : 0;
    this.blockCarrinho();
  }

  finalizaCompra(): void {
    this.compraStorage = {
      hotdog: this.hotdog,
      xtudo: this.xtudo
    }
    this.setLocalStorage();
    this.goToPagarPage();
  }

  carregaCarrinho() {
    this.compraStorage = localStorage.getItem('compras') ? localStorage.getItem('compras') : [];
    console.log(JSON.parse(this.compraStorage));
    this.compraStorage = JSON.parse(this.compraStorage);
    if (this.compraStorage != "") {
      this.hotdog = this.compraStorage.hotdog;
      console.log(this.hotdog);
      this.xtudo = this.compraStorage.xtudo;
      console.log(this.xtudo);
    }
  }

  setLocalStorage(): void {
    localStorage.removeItem("compras");
    localStorage.setItem("compras", JSON.stringify(this.compraStorage));
  }

  goToPagarPage() {
    this.router.navigate(['/pagar']);
  }
}
