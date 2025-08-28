import { Component } from '@angular/core';

interface Aluno {
  id: number;
  nome: string;
  ativo: boolean;
}

@Component({
  selector: 'app-diretiva',
  standalone: false,
  templateUrl: './diretiva.html',
  styleUrl: './diretiva.css'
})
export class Diretiva {
  listaAlunos: Aluno[] = [
    { id: 1, nome: 'Ana', ativo: true },
    { id: 2, nome: 'Bia', ativo: false },
    { id: 3, nome: 'Carlos', ativo: true },
    { id: 4, nome: 'Daniel', ativo: false }
  ];
  mostrarLista: boolean = true;
  tamanhoFonte: number = 16;

  alternarLista() {
    this.mostrarLista = !this.mostrarLista;
  }

  aumentarFonte() {
    this.tamanhoFonte += 2;
  }

  diminuirFonte() {
    if (this.tamanhoFonte > 10) this.tamanhoFonte -= 2;
  }
 }
