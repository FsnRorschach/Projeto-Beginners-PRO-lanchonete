import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as $ from 'jquery';

@Component({
  selector: 'app-pagar-page',
  templateUrl: './pagar-page.component.html',
  styleUrls: ['./pagar-page.component.scss']
})
export class PagarPageComponent implements OnInit {

  arrayLocalStorage: any = [];
  
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.carregaCarrinho();
    this.verificaPedido();
  }

  carregaCarrinho(){
    this.arrayLocalStorage = localStorage.getItem('compras') ? localStorage.getItem('compras') : [];
  }

  verificaPedido(){
    if(this.arrayLocalStorage == ''){
      console.log("Entrou na função verifica array");
      $('#modal-paga-page').modal('show');
      this.goToHomePage();
    }
  }

  goToHomePage() {
    this.router.navigate(['/home-page']);
  }
}


