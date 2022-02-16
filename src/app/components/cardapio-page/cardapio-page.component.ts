import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cardapio-page',
  templateUrl: './cardapio-page.component.html',
  styleUrls: ['./cardapio-page.component.scss']
})
export class CardapioPageComponent implements OnInit {

  compraStorage: any = [];
  hotdog: number = 0;
  xtudo: number = 0;

  constructor() {

  }

  ngOnInit(): void {
  }

  compraHotDog(): void {
    this.hotdog += 1;
    console.log(this.hotdog);
  }

  comprarXtudo(): void {
    this.xtudo += 1;
    console.log(this.xtudo);
  }

  finalizaCompra(): void {
    this.compraStorage.push({
      hotdog: this.hotdog,
      xtudo: this.xtudo
    })
    console.log(this.compraStorage);
    this.setLocalStorage();
  }

  setLocalStorage(): void {
    localStorage.setItem("compras", JSON.stringify(this.compraStorage));
  }
}
