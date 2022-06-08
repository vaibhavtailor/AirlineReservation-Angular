import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { ReservationsComponent } from './reservations/reservations.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ReservationDetailComponent } from './reservation-detail/reservation-detail.component';


const routes: Routes = [

  { path: '', redirectTo: '/HomePage', pathMatch: 'full' },
  { path: 'detail/:id', component: ReservationDetailComponent },
  { path: 'HomePage', component: HomePageComponent },
  { path: 'reservations', component: ReservationsComponent }
  
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
