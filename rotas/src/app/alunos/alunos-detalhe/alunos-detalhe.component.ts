import { Subscription } from 'rxjs';
import { AlunosService } from './../alunos.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-alunos-detalhe',
  templateUrl: './alunos-detalhe.component.html',
  styleUrls: ['./alunos-detalhe.component.css']
})
export class AlunosDetalheComponent implements OnInit, OnDestroy {

  id: number;
  inscricao: Subscription;
  aluno: any;


  constructor(private route: ActivatedRoute, private alunosService: AlunosService, private router: Router) { }

  ngOnInit(): void {
    this.inscricao = this.route.params.subscribe(
      (params: any) => {
        let id = params['id'];

        this.aluno = this.alunosService.getAluno(id)

        if(this.aluno == null){
          this.aluno = {}
        }
      }
    )
  }

  editarAluno(){
    this.router.navigate(['/alunos', this.aluno.id, 'editar'])
  }

  ngOnDestroy(){
    this.inscricao.unsubscribe();
  }
}
