import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  usuarios: any[] = [
    { id: 1, nomeCompleto: 'João da Silva', email: 'joao@example.com', idade: 30, paroquia: 'Sant\'Ana e São Joaquim', servo: 'Ministro' },
    { id: 2, nomeCompleto: 'Maria Oliveira', email: 'maria@example.com', idade: 25, paroquia: 'Sant\'Ana e São Joaquim', servo: 'Acolito' },
    // Adicione mais usuários conforme necessário
  ];

  constructor(private firestore: AngularFirestore) { }

  // Método para buscar usuários do Firestore
  getUsuarios(): Observable<any[]> {
    return this.firestore.collection('usuarios').valueChanges();
  }

  // Método para adicionar usuário ao Firestore
  addUsuario(usuario: any): Promise<any> {
    return this.firestore.collection('usuarios').add(usuario);
  }

  // Método para atualizar usuário no Firestore
  updateUsuario(id: string, usuario: any): Promise<void> {
    return this.firestore.collection('usuarios').doc(id).update(usuario);
  }
}
