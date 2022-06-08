import { Injectable } from '@angular/core';

import { Reservation } from './reservation';
import { Reservations } from './sample-reservations';

import { Observable, of } from 'rxjs';

import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  getReservations(): Observable<Reservation[]> {
    const reservations = of(Reservations);
    this.messageService.add('ReservationService: fetched reservations');
    return reservations;
  }

  getReservation(id: number): Observable<Reservation> {
    const reservation = Reservations.find(r => r.id === id)!;
    this.messageService.add(`ReservationService: fetched hero id=${id}`);
    return of(reservation);
  }

  constructor(private messageService: MessageService) { }
}
