import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getByUserId(userId, cb) {
    let httpHeaders = new HttpHeaders();
    httpHeaders = httpHeaders.set('Content-Type', 'application/json');
    httpHeaders = httpHeaders.set('Authorization', 'Bearer ' + localStorage.getItem('jwt'));
    this.httpClient
      .get(environment.BaseURL + '/api/chat/provider/' + userId, { headers: httpHeaders })
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

  getByChatId(id, cb) {
    let httpHeaders = new HttpHeaders();
    httpHeaders = httpHeaders.set('Content-Type', 'application/json');
    httpHeaders = httpHeaders.set('Authorization', 'Bearer ' + localStorage.getItem('jwt'));
    this.httpClient
      .get(environment.BaseURL + '/api/chat/' + id, { headers: httpHeaders })
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

  create(chat, cb) {
    let httpHeaders = new HttpHeaders();
    httpHeaders = httpHeaders.set('Content-Type', 'application/json');
    httpHeaders = httpHeaders.set('Authorization', 'Bearer ' + localStorage.getItem('jwt'));
    this.httpClient
      .post(environment.BaseURL + '/api/chat/', chat, { headers: httpHeaders })
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

  sendMessage(textMessage, cb) {
    let httpHeaders = new HttpHeaders();
    httpHeaders = httpHeaders.set('Content-Type', 'application/json');
    httpHeaders = httpHeaders.set('Authorization', 'Bearer ' + localStorage.getItem('jwt'));
    this.httpClient
      .post(environment.BaseURL + '/api/chat/history', textMessage, { headers: httpHeaders })
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
