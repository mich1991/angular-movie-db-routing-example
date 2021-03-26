import { Component, OnInit } from '@angular/core';
import { Movie } from '../models/movie';
import { HttpMoviesService } from '../services/http-movies.service';

@Component({
  selector: 'app-http-test',
  templateUrl: './http-test.component.html',
  styleUrls: ['./http-test.component.css']
})
export class HttpTestComponent {
  errorMessage: string
  movies;
  constructor(private http: HttpMoviesService) { }

  get(){
    this.movies = this.http.getMovies().subscribe()
  }

  post(){
    const movie:Movie = {
      country:'Poland',
      director: 'Marek Brodzki',
      category: 'Fantasy',
      plot: 'Monster killer have to choose the smaller evil',
      poster: 'https://static.wikia.nocookie.net/wiedzmin/images/2/26/FS_Plakat.jpg',
      year:'2001',
      title: 'Witcher',
      imdbRating: '10.0'
    } 
    this.http.postMovie(movie).subscribe()
  }
  put(){
    const movie:Movie = {
      id:'54',
      country:'Poland',
      director: 'Marek Brodzki',
      category: 'Fantasy',
      plot: 'Monster killer have to choose the smaller evil',
      poster: 'https://static.wikia.nocookie.net/wiedzmin/images/2/26/FS_Plakat.jpg',
      year:'2001',
      title: 'Witcher 2',
      imdbRating: '10.0',
    } 
    this.http.putMovie(movie).subscribe()
  }
  patch(){
    const movie:Partial<Movie> = {
      id:'54',
      title: 'Witcher 3',
      imdbRating: '10.0',
    } 
    this.http.patchMovie(movie).subscribe()
  }
  remove(){
    this.http.deleteMovie('54').subscribe()
  }
  error(){
    this.http.deleteMovie('999').subscribe({error: (err:string) => {
      this.errorMessage = err
      setTimeout(() => this.errorMessage = '', 5000)
    }})
  }
}
