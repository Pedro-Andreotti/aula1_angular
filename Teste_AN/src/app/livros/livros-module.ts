import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LivrosRoutingModule } from './livros-routing-module';
import { Cadastrar } from './cadastrar/cadastrar';
import { ListarComponent } from '../usuarios/listar-component/listar-component';
import { UsuariosModule } from '../usuarios/usuarios-module';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {MatChipsModule} from '@angular/material/chips';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    Cadastrar
  ],
  imports: [
    CommonModule,
    LivrosRoutingModule,
    UsuariosModule,
    MatToolbarModule,
    MatCardModule,
    MatChipsModule,
    MatProgressBarModule,
    FormsModule
  ]
})
export class LivrosModule { }
