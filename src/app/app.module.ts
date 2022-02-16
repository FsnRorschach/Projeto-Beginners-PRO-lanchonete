import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MenuPageComponent } from './components/menu-page/menu-page.component';
import { CardapioPageComponent } from './components/cardapio-page/cardapio-page.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { ContaPageComponent } from './components/conta-page/conta-page.component';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    MenuPageComponent,
    CardapioPageComponent,
    HomePageComponent,
    ContaPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
