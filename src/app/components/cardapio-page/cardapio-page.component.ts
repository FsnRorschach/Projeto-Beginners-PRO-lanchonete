import { Component, OnInit } from '@angular/core';
import { Router }from '@angular/router';

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
  }

  compraHotDog(): void {
    this.hotdog += 1;
    console.log(this.hotdog);
  }

  comprarXtudo(): void {
    this.xtudo += 1;
    console.log(this.xtudo);
  }

  removeItemX(): void {
    this.xtudo -= 1;
    console.log(this.xtudo);
  }

  removeItemH(): void {
    this.hotdog -= 1;
    console.log(this.hotdog);
  }

  finalizaCompra(): void {
    this.compraStorage = {
      hotdog: this.hotdog,
      xtudo: this.xtudo
    }

    console.log(this.compraStorage);
    this.setLocalStorage();
  }

  carregaCarrinho(){
    this.compraStorage = localStorage.getItem('compras') ? localStorage.getItem('compras') : [];
    console.log(JSON.parse(this.compraStorage));
    this.compraStorage = JSON.parse(this.compraStorage);
    if(this.compraStorage != ""){
      this.hotdog = this.compraStorage.hotdog;
      console.log(this.hotdog);
      this.xtudo = this.compraStorage.xtudo;
      console.log(this.xtudo);
    }
  }

  setLocalStorage(): void {
    localStorage.removeItem("compras");
    localStorage.setItem("compras", JSON.stringify(this.compraStorage));
    this.goToPagarPage();
  }

  goToPagarPage() {
    this.router.navigate(['/pagar']);
  }
}
