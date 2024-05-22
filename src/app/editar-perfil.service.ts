import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PerfilService {
  private perfil: any; // Você pode ajustar o tipo de dados de acordo com a estrutura do seu perfil

  constructor() { }

  // Método para obter o perfil do cliente
  getPerfil(): any {
    return this.perfil;
  }

  // Método para definir o perfil do cliente
  setPerfil(novoPerfil: any): void {
    this.perfil = novoPerfil;
  }

  // Outros métodos para atualizar, excluir ou realizar operações adicionais no perfil do cliente
}
