import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module'; // Configurações de rotas
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent, // Componente principal
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, // Rotas
    HttpClientModule, // Requisições HTTP
  ],
  providers: [],
  bootstrap: [AppComponent], // Inicializa o AppComponent
})
export class AppModule {}
