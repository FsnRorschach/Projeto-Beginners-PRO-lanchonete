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
  hotDog: number = 0;
  xtudo: number = 0;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.carregaCarrinho();
    this.verificaPedido();
  }

  carregaCarrinho(): void {
    this.comprasLocalStorage = JSON.parse(localStorage.getItem('compras') as string);
    console.log(this.comprasLocalStorage);
    this.hotDog = this.comprasLocalStorage.hotdog;
    this.xtudo = this.comprasLocalStorage.xtudo;
  }

  verificaPedido(){
    if(this.comprasLocalStorage == ''){
      console.log("Entrou na função verifica array");
      $('#modal-paga-page').modal('show');
      this.goToHomePage();
    }
  }

  goToHomePage() {
    this.router.navigate(['/home-page']);
  }
}


