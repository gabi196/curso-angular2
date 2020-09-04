import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModuleWithProviders, Component } from '@angular/core';
import { AppModule } from '../app.module';

import { Routes, RouterModule } from '@angular/router';
import { CursosComponent } from './cursos.component';
import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';
import { CursoNaoEncontradoComponent } from './curso-nao-encontrado/curso-nao-encontrado.component';

const cursosRoutes: Routes = [
    { path: 'cursos', component: CursosComponent },
    { path: 'cursos/:id', component: CursoDetalheComponent},
    { path: 'naoEncontrado', component: CursoNaoEncontradoComponent },
];

export const routing: ModuleWithProviders<AppModule> = RouterModule.forChild(cursosRoutes);


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(cursosRoutes)
  ],
exports: [RouterModule]
})
export class CursosRoutingModule { }
