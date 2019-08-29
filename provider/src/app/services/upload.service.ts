import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class UploadService {

  constructor(
    private httpClient: HttpClient
  ) { }
  uploadImage(userId, formData: any, cb) {
    let httpHeaders = new HttpHeaders();
    // httpHeaders = httpHeaders.set('Content-Type', 'multipart/form-data');
    httpHeaders = httpHeaders.set('Authorization', 'Bearer ' + localStorage.getItem('jwt'));
    // debugger;
    this.httpClient
      .post(environment.BaseURL + '/api/user/image/' + userId, formData, { headers: httpHeaders })
      .subscribe(
        (response) => {
          console.log(response);
          return cb(null, response);
        },
        (err) => {
          console.log(err.error.message);
          return cb(err, null);
        }
      );
  }
}
