import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from '../services/usuario.service';

@Component({
  selector: 'app-editar-perfil',
  templateUrl: './editar-perfil.component.html',
  styleUrls: ['./editar-perfil.component.css']
})
export class EditarPerfilComponent implements OnInit {
  usuario: any = {};

  constructor(private router: Router, private usuarioService: UsuarioService) {}

  ngOnInit(): void {
    // Carregar o usuário atual aqui
  }

  submitForm(form: any) {
    if (form.valid) {
      this.usuarioService.updateUsuario(this.usuario.id, form.value).then(() => {
        console.log('Usuário atualizado com sucesso:', form.value);
        this.router.navigate(['/home']);
      }).catch(error => {
        console.error('Erro ao atualizar usuário:', error);
      });
    } else {
      console.log('Formulário inválido. Verifique os campos.');
    }
  }

  goToEditarPerfil() {
    this.router.navigate(['/home']);
  }
}
