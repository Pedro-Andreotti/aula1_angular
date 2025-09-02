import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Listaprodutoscomponent } from './listaprodutoscomponent/listaprodutoscomponent';

const routes: Routes = [
  {
    path: 'lista', component: Listaprodutoscomponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProdutosmoduleRoutingModule { }
