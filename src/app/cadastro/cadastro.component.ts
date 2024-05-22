
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from '../services/usuario.service'; // Importe o UsuarioService

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent {

  constructor(private router: Router, private usuarioService: UsuarioService) { }

  submitForm(form: any) {
    if (form.valid) {
      console.log('Formulário válido. Dados enviados:', form.value);
      // Aqui você pode enviar os dados para um serviço ou fazer o que for necessário com eles
    } else {
      console.log('Formulário inválido. Verifique os campos.');
    }
  }

  goToCadastro() {
    this.router.navigate(['/login'])
  }
}
