import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common'; // Importando o CommonModule

@Component({
  selector: 'app-movies',
  standalone: true, // Standalone component
  imports: [CommonModule, HttpClientModule], // Incluindo CommonModule e HttpClientModule
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css'],
})
export class MoviesComponent implements OnInit {
  movies: any[] = []; // Definindo a propriedade

  constructor(private http: HttpClient) {} // Injetando o HttpClient

  ngOnInit(): void {
    this.fetchMovies();
  }

  fetchMovies(): void {
    const apiUrl = 'https://swapi.dev/api/films/'; // URL da API de filmes do Star Wars
    this.http.get(apiUrl).subscribe((response: any) => {
      this.movies = response.results; // Populando a propriedade com os resultados da API
    });
  }
}
