import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  private jwtHelper: JwtHelperService;
  constructor(
    private router: Router
  ) {
    this.jwtHelper = new JwtHelperService();
  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    console.log('AuthGuard#canActivate called');
    // debugger;
    return this.checkLogin(localStorage.getItem('jwt'));
  }

  checkLogin(jwt: string): boolean {
    const isExpered = this.jwtHelper.isTokenExpired(jwt);
    if (isExpered) {
      this.router.navigate(['/login']);
      return false;
    } else {
      return true;
    }
  }
}
