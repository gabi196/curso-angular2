import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import {FormsModule} from '@angular/forms';
import { InputPropetieComponent } from './input-propetie/input-propetie.component';
import { OutputPropetieComponent } from './output-propetie/output-propetie.component';
import { CicloComponent } from './ciclo/ciclo.component';
@NgModule({
  declarations: [
    AppComponent,
    DataBindingComponent,
    InputPropetieComponent,
    OutputPropetieComponent,
    CicloComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
