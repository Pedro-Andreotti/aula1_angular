import { Component } from '@angular/core';
import { Produto } from '../Modelo/Produto';

@Component({
  selector: 'app-tabela',
  standalone: false,
  templateUrl: './tabela.html',
  styleUrl: './tabela.css'
})
export class Tabela {
 displayedColumns: string[] = ['nomeColuna', 'valorColuna', 'acaoColuna'];

 dataSource: Produto[] = [
   {nome: 'Coca-Cola', valor: 10},
   {nome: 'Fanta', valor: 8},
 ];

 btnEditar(element: Produto) {
   console.log('Editar', element);
 }

 btnExcluir(element: Produto) {
   console.log('Excluir', element);
 }
}
