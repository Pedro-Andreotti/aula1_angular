import { Component } from '@angular/core';


@Component({
  selector: 'app-cadastrar',
  standalone: false,
  templateUrl: './cadastrar.html',
  styleUrl: './cadastrar.css'
})
export class Cadastrar {
  mostrarMensagem = false;

  togleMensagem() {
    this.mostrarMensagem = !this.mostrarMensagem;
  }

  listaItens = ['Maçã', 'Banana', 'Pera'];

    isDestaque = true;
    haserror = false;

    togleDestaque(){
        this.isDestaque = !this.isDestaque;
        this.haserror = !this.haserror;
    }

    cordeFundo = 'yellow';
    tamanhoFonte = '20px';

    longText = `The Chihuahua is a Mexican breed of toy dog. It is named for the
  Mexican state of Chihuahua and is among the smallest of all dog breeds. It is
  usually kept as a companion animal or for showing.`;

   logado: boolean = false;

  alternarLogin(): void {
    this.logado = !this.logado;
  }


   tarefas: string[] = [];
  novaTarefa: string = '';

  adicionarTarefa() {
    if (this.novaTarefa.trim()) {
      this.tarefas.push(this.novaTarefa.trim());
      this.novaTarefa = '';
    }
  }

  removerTarefa(index: number) {
    this.tarefas.splice(index, 1);
  }
}



