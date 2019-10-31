import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Booking } from '../models';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class BookingService {

  constructor(
    private httpClient: HttpClient
  ) { }
  getBookingsbyListingId(id): Promise<any> {
    let httpHeaders = new HttpHeaders();
    httpHeaders = httpHeaders.set('Content-Type', 'application/json');
    httpHeaders = httpHeaders.set('Authorization', 'Bearer ' + localStorage.getItem('jwt'));
    return new Promise((resolve, reject) => {
      this.httpClient
        .get(environment.BaseURL + '/api/booking/listing/' + id, { headers: httpHeaders })
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

  getAllBookings() {
    let httpHeaders = new HttpHeaders();
    httpHeaders = httpHeaders.set('Content-Type', 'application/json');
    httpHeaders = httpHeaders.set('Authorization', 'Bearer ' + localStorage.getItem('jwt'));
    return new Promise((resolve, reject) => {
      this.httpClient
        .get(environment.BaseURL + '/api/booking/' + localStorage.getItem('userId'), { headers: httpHeaders })
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
        .get(environment.BaseURL + '/api/booking/:' + id, { headers: httpHeaders })
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
      debugger;
      this.httpClient
        .post(environment.BaseURL + '/api/booking/update', booking, { headers: httpHeaders })
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
}
