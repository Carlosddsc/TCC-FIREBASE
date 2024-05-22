import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  nome: string = ''; // Inicialize a propriedade nome

  constructor(private authService: AuthService,
       private router:Router) { }

  ngOnInit(): void {
    // Supondo que AuthService tenha um método para obter o nome do usuário logado
  
  }

  goToCadastro(){
    this.router.navigate(['/ministerio'])}

    goToInformacoes() {
      this.router.navigate(['/informacoes']);
    }    

    goToEditarperfil(){
      this.router.navigate(['/editar-perfil'])}
      
      goToEventos() {
        this.router.navigate(['/eventos']);
      }
      
      goToLogin() {
        this.router.navigate(['/login']); // Navegar para a tela de login
      }
  logout() {
    this.authService.logout();
    // Redirecionar para a página de login ou para onde desejar após o logout
  }

  onMouseEnter(buttonName: string): void {
    console.log(`Mouse sobre o botão: ${buttonName}`);
  }
}
