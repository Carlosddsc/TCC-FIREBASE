import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { HomeComponent } from './home/home.component';
import { MinisterioComponent } from './ministerio/ministerio.component';
import { EditarPerfilComponent } from './editar-perfil/editar-perfil.component';
import { InformacoesComponent } from './informacoes/informacoes.component';
import { LancarEventosComponent } from './admin/lancar-eventos/lancar-eventos.component';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component'; 
import { CadastradosComponent } from './admin/cadastrados/cadastrados.component';
import { EventosComponent } from './eventos/eventos.component'; // Importe o componente de eventos


export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'informacoes', component: InformacoesComponent },
  { path: 'cadastro', component: CadastroComponent },
  { path: 'home', component: HomeComponent },
  { path: 'ministerio/:ministerioId', component: MinisterioComponent },
  { path: 'ministerio', component: MinisterioComponent },
  { path: 'editar-perfil', component: EditarPerfilComponent },
  { path: 'admin-home', component: AdminHomeComponent }, // Adicione a rota para o componente de home para o administrador
  { path: 'eventos', component: EventosComponent }, // Adicione a rota para o componente de eventos
  { path: 'admin/lancar-eventos', component: LancarEventosComponent }, 
  { path: 'admin/cadastrados', component: CadastradosComponent }, 
  { path: '', redirectTo: '/login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
