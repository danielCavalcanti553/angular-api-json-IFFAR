import { Component, OnInit } from '@angular/core';
import { Aluno } from '../domain/aluno';
import { AlunoService } from '../services/aluno.service';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})
export class AlunosComponent implements OnInit {

  alunos : Aluno[];

  constructor(private alunoService:AlunoService) {
    this.getAluno();
  }

  ngOnInit() {

  }

  getAluno(){
    this.alunoService.getAlunos()
        .subscribe(response  => {
          this.alunos = response['data'];
          console.log(this.alunos[0].links.id_curso.title);
          console.log(this.alunos);
        });
  }

}
