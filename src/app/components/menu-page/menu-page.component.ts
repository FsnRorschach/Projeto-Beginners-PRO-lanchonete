import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as $ from 'jquery';

@Component({
  selector: 'app-menu-page',
  templateUrl: './menu-page.component.html',
  styleUrls: ['./menu-page.component.scss']
})

export class MenuPageComponent implements OnInit {

  comprasLocalStorage: any = [];
  hotDog: number = 0;
  xtudo: number = 0;
  textModal: string = '';

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.acionaQR();
    this.verificaCarrinho();
    this.togglenavOpen();
  }

  togglenavOpen() {
    $('[data-bs-toggle="offcanvas"]').on('click', function () {
      $('.offcanvas-collapse').toggleClass('open')
    })
  }

  togglernavClose() {
    $('.offcanvas-collapse').toggleClass('open');
  }

  acionaQR() {
    $(function () {
      $('[data-toggle="modal"]').hover(function () {
        var modalId: any = $(this).data('target');
        $(modalId).modal('show');
      });
    });
  }

  carrinho() {
    this.togglernavClose();
    if (this.hotDog == 0 && this.xtudo == 0) {
      $('#modal-home-page').modal('show');
      this.textModal = "Carrinho vazio 😔"
    } else {
      this.goToPagarPage();
    }
  }

  cardapio() {
    this.togglernavClose();
    this.goToCardapioPage();
  }

  conta() {
    this.togglernavClose();
    this.goToContaPage();
  }

  home() {
    this.togglernavClose();
    this.goToHomePage();
  }

  verificaCarrinho(): void {
    this.comprasLocalStorage = JSON.parse(localStorage.getItem('compras') as string);
    this.hotDog = this.comprasLocalStorage.hotdog ? this.comprasLocalStorage.hotdog : 0;
    this.xtudo = this.comprasLocalStorage.xtudo ? this.comprasLocalStorage.xtudo : 0;
  }

  goToHomePage() {
    this.router.navigate(['']);
  }

  goToContaPage() {
    this.router.navigate(['/cadastro']);
  }
  goToPagarPage() {
    this.router.navigate(['/pagar']);
  }

  goToCardapioPage() {
    this.router.navigate(['/cardapio']);
  }
}

