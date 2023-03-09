import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from "@angular/material/table";
import { Movie } from 'src/app/core/interfaces/movies';
import { MovieService } from 'src/app/services/movie.service';
import { MatPaginator } from '@angular/material/paginator';


@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit, AfterViewInit {

  displayedColumns: string[] = ['title', 'year', 'cast', 'genres'];
  dataSource = new MatTableDataSource<Movie>();

  // @ts-ignore
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private _movieService: MovieService) { }

  ngOnInit(): void {
    this.onGetMovies();
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  onGetMovies(): void {
    this._movieService.getMovies().subscribe(
      data => {
        this.dataSource = new MatTableDataSource<Movie>(data);
        this.dataSource.paginator = this.paginator;
      },
      error => {
        console.log(error);
      }
    );
  }
}