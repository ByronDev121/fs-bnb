import { Injectable } from '@angular/core';
import { Listing } from '../models';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ListingService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getAllListings(cb) {
    let httpHeaders = new HttpHeaders();
    httpHeaders = httpHeaders.set('Content-Type', 'application/json');
    httpHeaders = httpHeaders.set('Authorization', 'Bearer ' + localStorage.getItem('jwt'));
    // debugger;
    this.httpClient
      .get(environment.BaseURL + '/api/listing/', { headers: httpHeaders })
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
    this.httpClient
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

}
