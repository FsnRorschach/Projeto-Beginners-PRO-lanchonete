import { PagarPageComponent } from './components/pagar-page/pagar-page.component';
import { ContaPageComponent } from './components/conta-page/conta-page.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { CardapioPageComponent } from './components/cardapio-page/cardapio-page.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { LoginPageComponent } from './components/login-page/login-page.component';


const routes: Routes = [
  {
    path: 'login',
    component: LoginPageComponent
  },
  {
    path: "",
    canActivate: [AuthGuard],
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
  },
  {
    path: '**',
    redirectTo: 'login',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
