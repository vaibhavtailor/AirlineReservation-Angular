import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { AppRoutingModule } from './app-routing.module';

import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

import { AppComponent } from './app.component';
import { ReservationsComponent } from './reservations/reservations.component';
import { ReservationDetailComponent } from './reservation-detail/reservation-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ReservationSearchComponent } from './reservation-search/reservation-search.component';

@NgModule({
  declarations: [
    AppComponent,
    ReservationsComponent,
    ReservationDetailComponent,
    MessagesComponent,
    HomePageComponent,
    ReservationSearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,

    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, { dataEncapsulation: false })
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
