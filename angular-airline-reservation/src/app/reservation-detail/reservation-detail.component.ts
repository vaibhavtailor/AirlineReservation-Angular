import { Component, OnInit, Input } from '@angular/core';
import { Reservation } from '../reservation'; 

@Component({
  selector: 'app-reservation-detail',
  templateUrl: './reservation-detail.component.html',
  styleUrls: ['./reservation-detail.component.css']
})
export class ReservationDetailComponent implements OnInit {

  @Input() reservation?: Reservation;
  
  constructor() { }

  ngOnInit(): void {
  }

}
