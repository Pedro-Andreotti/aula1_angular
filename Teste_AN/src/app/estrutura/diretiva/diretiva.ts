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
