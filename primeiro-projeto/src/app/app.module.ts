//root module

import { BrowserModule } from '@angular/platform-browser'; //prepare aplication to execution int browser
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MyFirstComponent} from './my-first/my-first.component'
import {CursosModule} from './cursos/cursos.module'
import { from } from 'rxjs';

@NgModule({ // class decorator | needs declaration
  imports: [
    BrowserModule,
    AppRoutingModule,
    CursosModule
  ],
  declarations: [ //meta data --> components, pipes, direc
    AppComponent,
    MyFirstComponent
  ],
  providers: [],
  bootstrap: [AppComponent] //just root module, container
})
export class AppModule { } //class declaration
