import { Injectable } from '@angular/core';

import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Reservation } from './reservation';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  createDb() {
    const reservations = [
      { id: 12, name: 'Charles Green' },
      { id: 13, name: 'Joseph Baker' },
      { id: 14, name: 'Chris Nelson' },
      { id: 15, name: 'Mark White' },
      { id: 16, name: 'Donald Mitchell' },
      { id: 17, name: 'Kiara' },
      { id: 18, name: 'George Smith' },
      { id: 19, name: 'Daniel Hill' },
      { id: 20, name: 'Tornado' }
    ];
    return {reservations};
  }

  genId(reservations: Reservation[]): number {
    return reservations.length > 0 ? Math.max(...reservations.map(reservation => reservation.id)) + 1 : 11;
  }
}
