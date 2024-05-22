// auth.service.ts

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isAuthenticated(): boolean {
    // Implemente a lógica para verificar se o usuário está autenticado
    return false;
  }

  logout(): void {
    // Implemente a lógica para realizar o logout
    console.log('Logout');
  }

  login(email: string, password: string): boolean {
    // Implemente a lógica de login aqui
    return false;
  }

  // Método para validar o formato do email
  validateEmail(email: string): boolean {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  }
}
