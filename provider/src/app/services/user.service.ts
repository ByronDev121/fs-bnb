import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient
  ) { }
  getUserById(id, cb) {
    let httpHeaders = new HttpHeaders();
    httpHeaders = httpHeaders.set('Content-Type', 'application/json');
    httpHeaders = httpHeaders.set('Authorization', 'Bearer ' + localStorage.getItem('jwt'));
    this.http
      .get(environment.BaseURL + '/api/user/' + id, { headers: httpHeaders })
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

  updateUserById(user, cb) {
    this.http
      .post(environment.BaseURL + '/api/users/', user)
      .subscribe(
        (response) => {
          return cb(null, response);
        },
        (err) => {
          return cb(err, null);
        }
      );
  }

  // Delete User
  deleteUserById(id, cb) {
    this.http
      .delete(environment.BaseURL + '/api/users/delete/' + id)
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
