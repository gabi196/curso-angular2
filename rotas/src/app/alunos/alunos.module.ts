import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AlunosComponent } from './alunos.component';
import { AlunosFormComponent } from './alunos-form/alunos-form.component';
import { AlunosDetalheComponent } from './alunos-detalhe/alunos-detalhe.component';
import { AlunosRoutingModule } from './alunos.routing.module';
import { AlunosService } from './alunos.service';

@NgModule({
    imports: [CommonModule, AlunosRoutingModule, FormsModule],
    exports: [],
    declarations: [
        AlunosComponent, 
        AlunosFormComponent,
        AlunosDetalheComponent
    ],
    providers: [AlunosService], // colocando em providers, todos os componentes em declarations terao acesso ao service

})

export class AlunosModule {}