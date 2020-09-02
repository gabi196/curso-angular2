import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExemplosPipesComponent } from './exemplos-pipes/exemplos-pipes.component';
import { CamelCasePipe } from './camel-case.pipe';
import { SettingsService } from './settings.service';
import { FiltroArrayPipe } from './filtro-array.pipe';
import { FiltroArrayImpuroPipe } from './filtro-array-impuro.pipe';

@NgModule({//components, diretivas e pipes
  declarations: [
    AppComponent,
    ExemplosPipesComponent,
    CamelCasePipe,
    FiltroArrayPipe,
    FiltroArrayImpuroPipe
  ],
  imports: [//modulos
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  // providers: [{provide: LOCALE_ID, useValue: 'pt-BR'}],
  // providers: [
  //   SettingsService,
  //   {
  //     provide: LOCALE_ID, 
  //     deps: [SettingsService],
  //     useFactory: (settinsService) => settinsService.getLocale()
  //   }
  // ],
  bootstrap: [AppComponent]
})
export class AppModule { }
