import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
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
  putMovie(movie:Movie){
    return this.http.put(`${this.urlMovie}/${movie.id}`, movie).pipe(tap(console.log))
  }
  patchMovie(movie:Partial<Movie>){
    return this.http.patch(`${this.urlMovie}/${movie.id}`, movie).pipe(tap(console.log))
  }
  deleteMovie(id:string):Observable<{}>{
    return this.http.delete(`${this.urlMovie}/${id}`).pipe(tap(console.log), catchError(this.errorHandler))
  }
  
  private errorHandler(error:HttpErrorResponse){
    console.error(
      `Name : ${error.name},\n
      Message: ${error.message},\n
      Returned Code: ${error.status}\n 
      `
    )
    return throwError('Something went wrong; Please try again later')
  }
}
