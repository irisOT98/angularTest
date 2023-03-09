import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { Movie } from '../core/interfaces/movies';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  url: string = environment.url;

  constructor(private _http: HttpClient) { }

  getMovies(): Observable<Movie[]> {
    return this._http.get<Movie[]>(this.url);
  }
}
