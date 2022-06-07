import { Component, OnInit } from '@angular/core';
import { Reservation } from '../reservation';

@Component({
  selector: 'app-reservations',
  templateUrl: './reservations.component.html',
  styleUrls: ['./reservations.component.css']
})
export class ReservationsComponent implements OnInit {

  reservation: Reservation = {
    id: 1,
    name: 'Vaibhav'
  };
  
  constructor() { }

  ngOnInit(): void {
  }

}
