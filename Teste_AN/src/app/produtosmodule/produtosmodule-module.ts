import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProdutosmoduleRoutingModule } from './produtosmodule-routing-module';
import { Listaprodutoscomponent } from './listaprodutoscomponent/listaprodutoscomponent';
import { share } from 'rxjs';
import { SharedmoduleModule } from '../sharedmodule/sharedmodule-module';


@NgModule({
  declarations: [
    Listaprodutoscomponent
  ],
  imports: [
    CommonModule,
    ProdutosmoduleRoutingModule,
    SharedmoduleModule
  ]
})
export class ProdutosmoduleModule { }
