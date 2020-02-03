import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MovieApiService {

  API_URL = 'https://api.themoviedb.org/3/search/multi';
  API_KEY = '1b553eb4946f4f9519194100bbcaf342';
  constructor(private httpService: HttpClient) {}

  get(searchTerm: string) {

    // note that we have to keep the value
    const params: HttpParams = new HttpParams()
    .set('api_key', this.API_KEY)
    .set('query', searchTerm);

    return this.httpService.get<any>(this.API_URL, {params}).toPromise();
  }
}
