import { Component } from '@angular/core';

@Component({
  selector: 'app-conta',
  standalone: false,
  templateUrl: './conta.html',
  styleUrl: './conta.css'
})
export class Conta {
  valor = 0;

  somar() {
    this.valor++;
  }

  diminuir() {
    this.valor--;
  // Garantir que o valor não fique negativo
  // Se o valor for menor que zero, definir como zero
    if ( this.valor < 0) {
    this.valor = 0;
    
  }
  }
}
