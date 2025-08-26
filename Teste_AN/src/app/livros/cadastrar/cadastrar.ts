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
}
