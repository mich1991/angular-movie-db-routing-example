import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Movie } from '../models/movie';

@Injectable({
  providedIn: 'root'
})
export class HttpMoviesService {
  url = 'http://localhost:3000'
  urlMovie = `${this.url}/movies`
  constructor(private http: HttpClient) {
  }

  getMovies() :Observable<HttpResponse<Movie[]>> {
    return this.http.get<HttpResponse<Movie[]>>(this.urlMovie).pipe(tap(console.log))
  }
  postMovie(movie:Movie){
    return this.http.post(this.urlMovie, movie).pipe(tap(console.log))
  }
}
