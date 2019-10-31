import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Listing } from '../../models/listing/listing';

@Injectable({
  providedIn: 'root'
})
export class ListingService {

  constructor(
    private http: HttpClient
  ) { }

  getByProviderId(id): Promise<Array<Listing>> {
    let httpHeaders = new HttpHeaders();
    httpHeaders = httpHeaders.set('Content-Type', 'application/json');
    httpHeaders = httpHeaders.set('Authorization', 'Bearer ' + localStorage.getItem('jwt'));
    return new Promise((resolve, reject) => {
      this.http.get(environment.baseUrl + '/api/listing/provider/' + id, { headers: httpHeaders }).subscribe((res: any) => {
        resolve(res);
      }, err => {
        reject(err);
      });
    });
  }

  getById(id): Promise<Array<Listing>> {
    let httpHeaders = new HttpHeaders();
    httpHeaders = httpHeaders.set('Content-Type', 'application/json');
    httpHeaders = httpHeaders.set('Authorization', 'Bearer ' + localStorage.getItem('jwt'));
    return new Promise((resolve, reject) => {
      this.http.get(environment.baseUrl + '/api/listing/' + id, { headers: httpHeaders }).subscribe((res: any) => {
        resolve(res);
      }, err => {
        reject(err);
      });
    });
  }

}
