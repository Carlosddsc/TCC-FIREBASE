// login.component.ts

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: string = ''; // Adicione a propriedade de e-mail
  password: string = '';

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    // Lógica de inicialização, se necessário
  }

  goToCadastro(){
    this.router.navigate(['/cadastro'])
  }

  // Método para realizar o login
  login(): void {
    if (this.authService.validateEmail(this.email)) {
      // Se o email for válido, chame o método de login do AuthService
      const loggedIn = this.authService.login(this.email, this.password);
      if (loggedIn) {
        // Se o login for bem-sucedido, redirecione para a página inicial
        this.router.navigate(['/home']);
      } else {
        // Caso contrário, exiba uma mensagem de erro ou realize outra ação adequada
        console.log('Login falhou. Verifique suas credenciais.');
      }
    } else {
      // Se o email não for válido, exiba uma mensagem de erro ou realize outra ação adequada
      console.log('Email inválido. Por favor, insira um email válido.');
    }
  }
}
