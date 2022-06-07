import { Component, OnInit } from '@angular/core';
import { Reservation } from '../reservation';

import { Reservations } from '../sample-reservations';

@Component({
  selector: 'app-reservations',
  templateUrl: './reservations.component.html',
  styleUrls: ['./reservations.component.css']
})
export class ReservationsComponent implements OnInit {
  
  reservations = Reservations;
  selectedReservation?: Reservation;
  constructor() { }

  ngOnInit(): void {
  }

  onSelect(reservation: Reservation): void {
    this.selectedReservation = reservation;
  }

}
