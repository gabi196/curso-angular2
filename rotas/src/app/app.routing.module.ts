import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModuleWithProviders, Component } from '@angular/core';
import { AppModule } from './app.module';

import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
// import { CursosComponent } from './cursos/cursos.component';
// import { CursoDetalheComponent } from './cursos/curso-detalhe/curso-detalhe.component';
// import { CursoNaoEncontradoComponent } from './cursos/curso-nao-encontrado/curso-nao-encontrado.component';

const appRoutes: Routes = [
    // { path: 'cursos', component: CursosComponent },
    // { path: 'cursos/:id', component: CursoDetalheComponent},
    { path: 'login', component: LoginComponent },
    //{ path: 'naoEncontrado', component: CursoNaoEncontradoComponent },
    { path: '', component: HomeComponent }
];

export const routing: ModuleWithProviders<AppModule> = RouterModule.forRoot(appRoutes);


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
