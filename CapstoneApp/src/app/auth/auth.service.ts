import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  token: string;

  constructor(private router: Router) { }

  login(username: string, password: string) {
    this.token = `${username}${password}`;
    this.router.navigate(['userprofile']);
  }

  loggedIn(): boolean {
    if (this.token !== undefined) {
      return true;
    }

    return false;
  }
}
