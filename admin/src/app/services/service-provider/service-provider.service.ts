import { Injectable } from '@angular/core';
import { User } from '../../models/user/user';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ServiceProviderService {

  public serviceProviders: Array<User>;

  constructor(
    private http: HttpClient
  ) { }

  getAll(): Promise<Array<User>> {
    return new Promise((resolve, reject) => {
      let httpHeaders = new HttpHeaders();
      httpHeaders = httpHeaders.set('Content-Type', 'application/json');
      httpHeaders = httpHeaders.set('Authorization', 'Bearer ' + localStorage.getItem('jwt'));
      this.http.get(environment.baseUrl + '/api/user', { headers: httpHeaders }).subscribe((res: Array<User>) => {
        res = res.filter(x => x.role === 'provider');
        resolve(res);
      }, err => {
        reject(err);
      });
    });
  }

}
