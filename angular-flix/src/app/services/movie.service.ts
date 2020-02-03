import { Injectable } from '@angular/core';
import { MovieApiService } from './movie-api.service';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  searchResults = [];
  myMovieList = [];
  constructor(
    private movieApiService: MovieApiService,
    private apiService: ApiService
  ) { }

  getSearchResults() {
    return this.searchResults;
  }

  getMovieList() {
    return this.myMovieList;
  }

  async searchForMovies(searchTerm: string) {
    const response = await this.movieApiService.get(searchTerm);
    this.searchResults.length = 0;
    this.searchResults.push(...response.results);
  }

  async loadMovieList() {
    const results = await this.apiService.get();
    this.myMovieList.length = 0;
    this.myMovieList.push(...results);
  }

  async saveToList(movie: any) {
    await this.apiService.post(movie);
    await this.loadMovieList();
  }
}
