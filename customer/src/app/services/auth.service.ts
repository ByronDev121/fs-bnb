import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }

  login(authUser) {

    return new Promise((resolve, reject) => {

      this.http.post(environment.BaseURL + '/api/auth/login/user', authUser).subscribe((res: any) => {
        console.log(res);

        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('jwt', res.jwt);
        localStorage.setItem('userId', JSON.stringify(res.user.id));
        resolve(res);
      },
        (err) => {
          console.log(err);
          reject(err.error.msg);
        }
      );
    });
  }

  register(user, cb) {
    user.role = 'user';
    this.http
      .post(environment.BaseURL + '/api/auth/register', user)
      .subscribe(
        (response: any) => {
          console.log(response);
          localStorage.setItem('isLoggedIn', 'true');
          localStorage.setItem('jwt', response.jwt);
          localStorage.setItem('userId', JSON.stringify(response.user.id));
          return cb(null, response);
        },
        (err) => {
          console.log(err);
          alert(err.error.message);
          return cb(err, null);
        }
      );
  }

  logout() {
    localStorage.setItem('isLoggedIn', 'false');
    localStorage.setItem('jwt', '');
  }
}
