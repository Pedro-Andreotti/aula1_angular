import { Component } from '@angular/core';

interface Aluno {
  id: number;
  nome: string;
  status: string;
}

@Component({
  selector: 'app-diretiva',
  standalone: false,
  templateUrl: './diretiva.html',
  styleUrl: './diretiva.css'
})
export class Diretiva {

    listaAlunos:  Aluno[] = [
      { id: 1, nome: 'Ana', status: 'Ativo' },
      { id: 2, nome: 'Bia', status: 'Inativo' },
      { id: 3, nome: 'Carlos', status: 'Ativo ' },
      { id: 4, nome: 'Daniel', status: 'Inativo' },  
      ];

      btnVO (){
        this.btnVO.push({ });
      }
}
