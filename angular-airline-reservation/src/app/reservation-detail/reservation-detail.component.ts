import { Component, OnInit} from '@angular/core';

import { Reservation } from '../reservation';
import { ActivatedRoute } from '@angular/router';
import { ReservationService } from '../reservation.service'; 
import { Location } from '@angular/common';

@Component({
  selector: 'app-reservation-detail',
  templateUrl: './reservation-detail.component.html',
  styleUrls: ['./reservation-detail.component.css']
})
export class ReservationDetailComponent implements OnInit {

  reservation: Reservation | undefined;

  constructor(
    private route: ActivatedRoute,
    private reservationService: ReservationService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getReservation();
  }

  getReservation(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.reservationService.getReservation(id).subscribe(reservation => this.reservation = reservation);
  }

  return(): void {
    this.location.back();
  }

}
