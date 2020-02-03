import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IBeer } from '../ibeer';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private BEERS_URL = 'https://api.punkapi.com/v2/beers';

  constructor(private httpService: HttpClient) {

   }

   async get() {
    return this.httpService.get<IBeer[]>(this.BEERS_URL).toPromise();
   }

   async getCount(count: number) {
     return this.httpService.get<IBeer[]>(`${this.BEERS_URL}?per_page=${count}`).toPromise();
   }
}
