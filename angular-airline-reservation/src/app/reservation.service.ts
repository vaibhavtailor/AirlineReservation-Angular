import { Injectable } from '@angular/core';

import { Reservation } from './reservation';

import { Observable, of } from 'rxjs';

import { MessageService } from './message.service';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  private reservationsUrl = 'api/reservations'; //Url to web api

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }
    

  /**
  * Handle Http operation that failed.
  * Let the app continue.
  */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** GET reservations from the server */
  getReservations(): Observable<Reservation[]> {
    return this.http.get<Reservation[]>(this.reservationsUrl).pipe(
      tap(_ => this.log('fetched reservations')),
      catchError(this.handleError<Reservation[]>('getReservations', []))
    );
  }

  /** GET reservation by id. Return `undefined` when id not found */
  getReservationNo404<Data>(id: number): Observable<Reservation> {
    const url = `${this.reservationsUrl}/?id=${id}`;
    return this.http.get<Reservation[]>(url)
      .pipe(
        map(reservations => reservations[0]), // returns a {0|1} element array
        tap(h => {
          const outcome = h ? 'fetched' : 'did not find';
          this.log(`${outcome} reservation id=${id}`);
        }),
        catchError(this.handleError<Reservation>(`getReservation id=${id}`))
      );
  }

  /** GET reservation by id */
  getReservation(id: number): Observable<Reservation> {
    const url = `${this.reservationsUrl}/${id}`;
    
    return this.http.get<Reservation>(url).pipe(
      tap(_ => this.log(`fetched reservation id=${id}`)),
      catchError(this.handleError<Reservation>(`getReservation id=${id}`))
    );
  }

  /** PUT: update the Reservation on the server */
  updateReservation(reservation: Reservation): Observable<any> {
    return this.http.put(this.reservationsUrl, reservation, this.httpOptions).pipe(
      tap(_ => this.log(`updated reservation id=${reservation.id}`)),
      catchError(this.handleError<any>('updateReservation'))
    );
  }

  /** POST: add a new reservation to the server */
  addReservation(reservation: Reservation): Observable<Reservation> {
    return this.http.post<Reservation>(this.reservationsUrl, reservation, this.httpOptions).pipe(
      tap((newReservation: Reservation) => this.log(`added reservation with id=${newReservation.id}`)),
      catchError(this.handleError<Reservation>('addReservation'))
    );
  }

  /** DELETE: delete the reservation from the server */
  deleteReservation(id: number): Observable<Reservation> {
    const url = `${this.reservationsUrl}/${id}`;

    return this.http.delete<Reservation>(url, this.httpOptions).pipe(
      tap(_ => this.log(`deleted reservation id=${id}`)),
      catchError(this.handleError<Reservation>('deleteReservation'))
    );
  }

  /* GET reservations whose name contains search term */
  searchReservations(term: string): Observable<Reservation[]> {
    if (!term.trim()) {
      // if not search term, return empty reservation array.
      return of([]);
    }
    return this.http.get<Reservation[]>(`${this.reservationsUrl}/?name=${term}`).pipe(
      tap(x => x.length ?
         this.log(`found reservations matching "${term}"`) :
         this.log(`no reservations matching "${term}"`)),
      catchError(this.handleError<Reservation[]>('searchReservations', []))
    );
  }

  
  private log(message: string) {
    this.messageService.add(`ReservationService: ${message}`);
  }

}
