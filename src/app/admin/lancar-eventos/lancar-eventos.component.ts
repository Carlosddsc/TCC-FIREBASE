import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-admin-lancar-eventos',
  templateUrl: './lancar-eventos.component.html',
  styleUrls: ['./lancar-eventos.component.css']
})
export class LancarEventosComponent {
  usuarios: any[] = [];

  constructor() {}

  lancarEvento(): void {
    // Lógica para lançar o evento
  }
}
