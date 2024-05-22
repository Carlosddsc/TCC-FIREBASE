import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Importe FormsModule aqui

import { LoginComponent } from './login.component';
import { CadastroComponent } from '../cadastro/cadastro.component';



@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [
    LoginComponent,
  ]
})
export class LoginModule {   }
