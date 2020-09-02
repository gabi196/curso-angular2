import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CursosModule } from './cursos/curso.module';
import { CursosService } from './cursos/cursos.service';
import { CriarCursoModule } from './criar-curso/criar-curso.module';
import { LogService } from './shared/log.service';



@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [ //onde se eh importado modulos
    BrowserModule,
    AppRoutingModule,
    CriarCursoModule,
    CursosModule
  ],
  // providers: [CursosService], //onde se declara serviços, basta declarar apenas uma vez e serve para toda a aplicacao
  providers: [LogService], 
  bootstrap: [AppComponent]
})
export class AppModule { }
