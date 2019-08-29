import { Injectable } from '@angular/core';
// import { Listing } from '../models';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ListingService {

  constructor(
    private http: HttpClient
  ) { }
  getListingsByProviderId(cb) {
    let httpHeaders = new HttpHeaders();
    httpHeaders = httpHeaders.set('Content-Type', 'application/json');
    httpHeaders = httpHeaders.set('Authorization', 'Bearer ' + localStorage.getItem('jwt'));
    this.http
      .get(environment.BaseURL + '/api/listing', { headers: httpHeaders })
      .subscribe(
        (response: any) => {
          console.log(response);
          return cb(null, response);
        },
        (err) => {
          console.log(err.error.message);
          return cb(err, null);
        }
      );
  }

  getListingbyId(listingId, cb) {
    let httpHeaders = new HttpHeaders();
    httpHeaders = httpHeaders.set('Content-Type', 'application/json');
    httpHeaders = httpHeaders.set('Authorization', 'Bearer ' + localStorage.getItem('jwt'));
    this.http
      .get(environment.BaseURL + '/api/listing/' + listingId, { headers: httpHeaders })
      .subscribe(
        (response) => {
          console.log(response);
          return cb(null, response);
        },
        (err) => {
          console.log(err);
          return cb(err, null);

        }
      );
  }

  createListing(listing, cb) {
    let httpHeaders = new HttpHeaders();
    httpHeaders = httpHeaders.set('Content-Type', 'application/json');
    httpHeaders = httpHeaders.set('Authorization', 'Bearer ' + localStorage.getItem('jwt'));
    this.http
      .post(environment.BaseURL + '/api/listing/', listing, { headers: httpHeaders })
      .subscribe(
        (response) => {
          console.log(response);
          return cb(null, response);
        },
        (err) => {
          console.log(err);
          return cb(err, null);

        }
      );
  }
  uploadListingImg(listingId, img, cb) {
    let httpHeaders = new HttpHeaders();
    httpHeaders = httpHeaders.set('Authorization', 'Bearer ' + localStorage.getItem('jwt'));
    this.http
      .post(environment.BaseURL + '/api/listing/image/' + listingId, img, { headers: httpHeaders })
      .subscribe(
        (response) => {
          console.log(response);
          return cb(null, response);
        },
        (err) => {
          console.log(err);
          return cb(err, null);

        }
      );
  }
}
