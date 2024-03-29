import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Booking } from '../models';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BookingsService {

  public booking: Booking = new Booking();

  constructor(
    private httpClient: HttpClient
  ) { }

  createBooking(booking: Booking) {
    return new Promise((resolve, reject) => {
      let httpHeaders = new HttpHeaders();
      httpHeaders = httpHeaders.set('Content-Type', 'application/json');
      httpHeaders = httpHeaders.set('Authorization', 'Bearer ' + localStorage.getItem('jwt'));
      this.httpClient
        .post(environment.BaseURL + '/api/booking', booking,{headers:httpHeaders})
        .subscribe(
          (res) => {
            console.log(res);
            resolve(res);
          },
          (err) => {
            console.log(err);
            reject(err);
          }
        );
    });

  }

  getAllBookings() {
    return new Promise((resolve, reject) => {
      let httpHeaders = new HttpHeaders();
      httpHeaders = httpHeaders.set('Content-Type', 'application/json');
      httpHeaders = httpHeaders.set('Authorization', 'Bearer ' + localStorage.getItem('jwt'));
      this.httpClient
        .get(environment.BaseURL + '/api/booking',{headers:httpHeaders})
        .subscribe(
          (response) => {
            console.log(response);
            resolve(response);
          },
          (err) => {
            console.log(err);
            reject(err);
          }
        );
    });
  }

  getBookingsbyUserId(userId): Promise<any> {
    let httpHeaders = new HttpHeaders();
    httpHeaders = httpHeaders.set('Content-Type', 'application/json');
    httpHeaders = httpHeaders.set('Authorization', 'Bearer ' + localStorage.getItem('jwt'));
    return new Promise((resolve, reject) => {
      this.httpClient
        .get(environment.BaseURL + '/api/booking/user/' + userId,{headers:httpHeaders})
        .subscribe(
          (response) => {
            console.log(response);
            resolve(response);
          },
          (err) => {
            console.log(err);
            reject(err);
          }
        );
    });
  }

  getBookingbyId(id) {
    return new Promise((resolve, reject) => {
      let httpHeaders = new HttpHeaders();
      httpHeaders = httpHeaders.set('Content-Type', 'application/json');
      httpHeaders = httpHeaders.set('Authorization', 'Bearer ' + localStorage.getItem('jwt'));
      this.httpClient
        .get(environment.BaseURL + '/api/booking/:' + id,{headers:httpHeaders})
        .subscribe(
          (response) => {
            console.log(response);
            resolve(response);
          },
          (err) => {
            console.log(err);
            reject(err);
          }
        );
    });
  }


  updateBooking(booking: Booking) {
    return new Promise((resolve, reject) => {
      let httpHeaders = new HttpHeaders();
      httpHeaders = httpHeaders.set('Content-Type', 'application/json');
      httpHeaders = httpHeaders.set('Authorization', 'Bearer ' + localStorage.getItem('jwt'));
      this.httpClient
        .post(environment.BaseURL + '/api/bookings/update/', booking,{headers:httpHeaders})
        .subscribe(
          (response) => {
            console.log(response);
            resolve(response);
          },
          (err) => {
            console.log(err);
            reject(err);
          }
        );
    });

  }


  // Delete a Booking by Id
  /* cancelBookingById(id) {
    return new Promise((resolve, reject) => {
      this.httpClient
        .delete(environment.BaseURL + '/api/bookings/delete/:' + id)
        .subscribe(
          (response) => {
            console.log(response);
            resolve(response);
          },
          (err) => {
            console.log(err);
            resolve(err);
          }
        );
    });
  } */

}
