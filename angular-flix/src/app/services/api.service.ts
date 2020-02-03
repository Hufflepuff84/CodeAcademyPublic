import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  API_URL = 'https://ce-authenticated-backend.herokuapp.com/publicapi/movies';
  constructor(private httpService: HttpClient) {
  }

  get() {
    return this.httpService.get<any[]>(this.API_URL).toPromise();
  }

  post(movie: any) {
    return this.httpService.post<any>(this.API_URL, movie).toPromise();
  }
}
