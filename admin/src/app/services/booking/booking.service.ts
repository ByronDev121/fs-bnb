import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Booking } from '../../models/booking/booking';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  constructor(
    private http: HttpClient
  ) { }

  getByListingId(id): Promise<Array<Booking>> {
    let httpHeaders = new HttpHeaders();
    httpHeaders = httpHeaders.set('Content-Type', 'application/json');
    httpHeaders = httpHeaders.set('Authorization', 'Bearer ' + localStorage.getItem('jwt'));
    return new Promise((resolve, reject) => {
      this.http.get(environment.baseUrl + '/api/booking/listing/' + id, { headers: httpHeaders }).subscribe((res: any) => {
        resolve(res);
      }, err => {
        reject(err);
      });
    });
  }

}
