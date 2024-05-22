import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventoService {

  constructor(private firestore: AngularFirestore) { }

  addEvento(evento: any): Promise<any> {
    return this.firestore.collection('eventos').add(evento);
  }

  getEventos(): Observable<any[]> {
    return this.firestore.collection('eventos').valueChanges();
  }

  updateEvento(id: string, evento: any): Promise<void> {
    return this.firestore.collection('eventos').doc(id).update(evento);
  }
}
