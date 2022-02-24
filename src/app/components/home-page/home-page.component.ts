import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Toast } from 'bootstrap';
import * as $ from 'jquery';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  comprasLocalStorage: any = [];
  hotDog: number = 0;
  xtudo: number = 0;
  textModal: string = '';

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.verificaCarrinho();
  }

  carrinho() {
    if (this.hotDog == 0 && this.xtudo == 0) {
      $('#modal-home-page').modal('show');
      this.textModal = "Carrinho vazio 😔"
    } else {
      this.goToPagarPage();
    }
  }

  verificaCarrinho(): void {
    this.comprasLocalStorage = JSON.parse(localStorage.getItem('compras') as string);
    this.hotDog = this.comprasLocalStorage.hotdog ? this.comprasLocalStorage.hotdog : 0;
    this.xtudo = this.comprasLocalStorage.xtudo ? this.comprasLocalStorage.xtudo : 0;
  }

  goToPagarPage() {
    this.router.navigate(['/pagar']);
  }
}