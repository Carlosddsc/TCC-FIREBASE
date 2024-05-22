import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-cadastrados',
  templateUrl: './cadastrados.component.html',
  styleUrls: ['./cadastrados.component.css']
})
export class CadastradosComponent implements OnInit {
  usuarios: any[] = [];

  constructor(private router: Router, private usuarioService: UsuarioService) {}

  ngOnInit(): void {
    this.usuarioService.getUsuarios().subscribe(data => {
      this.usuarios = data;
    });
  }

  goToCadastro() {
    this.router.navigate(['/cadastro']);
  }
}
