import { Component } from '@angular/core';

@Component({
  selector: 'app-cadastrar',
  standalone: false,
  templateUrl: './cadastrar.html',
  styleUrl: './cadastrar.css'
})
export class Cadastrar {
  nome =  'pedro';
  caminhodeimagem = 'https';

  dizerOI() {
    this.nome = 'Ola quarto termo A';
  }
}
