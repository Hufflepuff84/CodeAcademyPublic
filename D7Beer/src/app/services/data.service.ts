import { Injectable } from '@angular/core';

import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private apiService: ApiService) { }

  async getBeers() {
    return await this.apiService.get();
  }

  async getBeersByCount(count: number) {
    return await this.apiService.getCount(count);
  }
}
