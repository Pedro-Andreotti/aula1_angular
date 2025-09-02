import { Component } from '@angular/core';

@Component({
  selector: 'app-botaocomponent',
  standalone: false,
  templateUrl: './botaocomponent.html',
  styleUrl: './botaocomponent.css'
})
export class Botaocomponent {
  texto = 'Clique aqui';
  onClick() {
    alert('Clicou no botão');
  }
}
