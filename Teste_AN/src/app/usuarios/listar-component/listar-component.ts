import { Component } from '@angular/core';

@Component({
  selector: 'app-listar-component',
  standalone: false,
  templateUrl: './listar-component.html',
  styleUrl: './listar-component.css'
})
export class ListarComponent {
  usuarios = [
    { id: 1, nome: 'João', cargo: 'Desenvolvedor' },
    { id: 2, nome: 'Maria', cargo: 'Designer' },
    { id: 3, nome: 'Pedro', cargo: 'Gerente de Projetos' }
  ];

}
