import { PagarPageComponent } from './components/pagar-page/pagar-page.component';
import { ContaPageComponent } from './components/conta-page/conta-page.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { CardapioPageComponent } from './components/cardapio-page/cardapio-page.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: "",
    component: HomePageComponent
  },
  {
    path: 'cadastro',
    component: ContaPageComponent
  },
  {
    path: 'cardapio',
    component: CardapioPageComponent
  },
  {
    path: 'pagar',
    component: PagarPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
