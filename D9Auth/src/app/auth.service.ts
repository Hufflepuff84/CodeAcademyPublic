import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _token: string;


  constructor(private apiService: ApiService) { }

  get getToken(): string {
    return this._token;
  }

  async login() {
    const data = {
      username: 'boogermanus',
      password: 'password'
    };

    await this.apiService.post('auth/signup', data);

    const response = await this.apiService.post('auth/login', data);

    this._token = response.token;
  }

}
