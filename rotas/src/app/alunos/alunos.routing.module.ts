import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { RouterModule, Router } from '@angular/router';
import { ModuleWithProviders, Component } from '@angular/core';
import { AppModule } from '../app.module';

import { AlunosComponent } from './alunos.component';
import { AlunosDetalheComponent } from './alunos-detalhe/alunos-detalhe.component';
import { AlunosFormComponent } from './alunos-form/alunos-form.component';
//declarar rotas filhas para evitar repeticao ou quando um componente pai e um componente filho sejam renderizados ao mesmo tempo

const alunosRoutes = [
    {
        path: 'alunos',
        component: AlunosComponent, // this is the component with the <router-outlet> in the template
        children: [
            {path: 'novo', component: AlunosFormComponent },
            {path: ':id', component: AlunosDetalheComponent},
            {path: ':id/editar', component: AlunosFormComponent }        
        ]
    }
];

 // {path: 'alunos', component: AlunosComponent, children : [
    //     {path: 'novo', component: AlunosFormComponent },
    //     {path: ':id', component: AlunosDetalheComponent},
    //     {path: ':id/editar', component: AlunosFormComponent }
    // ] },

export const routing: ModuleWithProviders<AppModule> = RouterModule.forChild(alunosRoutes);

@NgModule({
    imports: [CommonModule, RouterModule.forChild(alunosRoutes)],
    exports: [RouterModule],
    declarations: [
    ],
    providers: [],
})

export class AlunosRoutingModule{}