import { Component, OnInit } from '@angular/core';

import { Reservation } from '../reservation';

import { ReservationService } from '../reservation.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-reservations',
  templateUrl: './reservations.component.html',
  styleUrls: ['./reservations.component.css']
})
export class ReservationsComponent implements OnInit {
  
  
  selectedReservation?: Reservation;

  reservations: Reservation[] = [];

  constructor(private reservationService: ReservationService, private messageService: MessageService) { }

  ngOnInit(): void {
    this.getReservations();
  }

  onSelect(reservation: Reservation): void {
    this.selectedReservation = reservation;
    this.messageService.add(`ReservationsComponent: Selected reservation id=${reservation.id}`);
  }

  getReservations(): void {
    this.reservationService.getReservations().subscribe(reservations => this.reservations = reservations);
  }

}
