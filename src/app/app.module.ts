import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule, FIREBASE_OPTIONS } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { environment } from '../environments/environment.development';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { InformacoesModule } from './informacoes/informacoes.module'; 
import { AdminHomeComponent } from './admin/admin-home/admin-home.component'; 
import { EventosComponent } from './eventos/eventos.component'; 
import { LancarEventosComponent } from './admin/lancar-eventos/lancar-eventos.component';
import { CadastradosComponent } from './admin/cadastrados/cadastrados.component'; 
import { AppRoutingModule } from './app.routes';
import { environments } from '../environments/environments';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';



@NgModule({
  declarations: [
    AppComponent,
    EventosComponent,
    LancarEventosComponent,
    AdminHomeComponent, 
    CadastradosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    CommonModule,
    InformacoesModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    AppRoutingModule // Adicione o AppRoutingModule aqui
    
  ],
  providers: [{provide:FIREBASE_OPTIONS,useValue:environment.firebase}],
  bootstrap: [AppComponent]
})
export class AppModule { }
