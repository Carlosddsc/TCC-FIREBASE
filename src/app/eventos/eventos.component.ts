import { Component, OnInit } from '@angular/core';
import { EventoService } from '../services/eventos.service';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})
export class EventosComponent implements OnInit {
  eventos: any[] = [];
  agenda: any[] = [];

  constructor(private eventoService: EventoService) {}

  ngOnInit(): void {
    this.eventoService.getEventos().subscribe(data => {
      this.eventos = data;
      this.agenda = data.slice(0, 2);
    });
  }

  confirmarEvento(evento: any) {
    console.log('Evento confirmado:', evento);
    // Adicione aqui a lógica para confirmar o evento
  }

  negarEvento(evento: any) {
    console.log('Evento negado:', evento);
    // Adicione aqui a lógica para negar o evento
  }
}
