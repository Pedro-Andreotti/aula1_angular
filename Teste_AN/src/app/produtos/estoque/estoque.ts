import { Component } from '@angular/core';


@Component({
  selector: 'app-estoque',
  standalone: false,
  templateUrl: './estoque.html',
  styleUrl: './estoque.css'
})
export class Estoque {
  produtos = [
    { nome: 'Notebook', preco: 3500, estoque: 5 },
    { nome: 'Teclado', preco: 150, estoque: 0 },
    { nome: 'Monitor', preco: 1200, estoque: 3 }
  ];

  aumentarPrecos() {
     this.produtos.forEach(produto => {
      produto.preco = Math.round(produto.preco * 1.1);
    });
  }

  diminuirPrecos() {
   this.produtos.forEach(produto => {
      produto.preco = Math.round(produto.preco * 0.9);
    });
  }
  isDisponivel(produto: any): boolean {
    return produto.estoque > 0;
  }
   getCorPreco(preco: number): string {
    return preco > 2000 ? 'blue' : 'black';
  }
}
