import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: 'livros',
    loadChildren: () => import('./livros/livros-module').then(m => m.LivrosModule)
  }
  ,
  {
    path: 'contador',
    loadChildren: () => import('./contador/contador-module').then(m => m.ContadorModule)
  },
  {
    path: 'estrutura', loadChildren: () => import('./estrutura/estrutura-module').then(m => m.EstruturaModule)

  },
  {
    path: 'produtos', loadChildren: () => import('./produtos/produtos-module').then(m => m.ProdutosModule)

  },
  {
    path: 'usuarios', loadChildren: () => import('./usuarios/usuarios-module').then(m => m.UsuariosModule)

  },
  {
    path: 'shared', loadChildren: () => import('./sharedmodule/sharedmodule-module').then(m => m.SharedmoduleModule)

  },
  {
    path: 'lprodutos', loadChildren: () => import('./produtosmodule/produtosmodule-module').then(m => m.ProdutosmoduleModule)
  },
  {
    path: 'dados', loadChildren: () => import('./dados/dados-module').then(m => m.DadosModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
