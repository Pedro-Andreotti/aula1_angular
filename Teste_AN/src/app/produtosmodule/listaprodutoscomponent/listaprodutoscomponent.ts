import { Component } from '@angular/core';

@Component({
  selector: 'app-listaprodutoscomponent',
  standalone: false,
  templateUrl: './listaprodutoscomponent.html',
  styleUrl: './listaprodutoscomponent.css'
})
export class Listaprodutoscomponent {

  produtos = [
    { nome: 'Produto 1', preco: 10.0 },
    { nome: 'Produto 2', preco: 20.0 },
    { nome: 'Produto 3', preco: 30.0 }
  ];
}
