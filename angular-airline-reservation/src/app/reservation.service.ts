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

  constructor(private messageService: MessageService) { }
}
