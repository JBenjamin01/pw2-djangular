import { Component } from '@angular/core';
import { ApiService } from './api.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [CommonModule]
})

export class AppComponent {
  movies: any[] = [];
  constructor(private api:ApiService) {
    this.getMovies();
  }
  getMovies = () => {
    this.api.getAllMovies().subscribe (
      data => {
        console.log(data);
        this.movies = data;  //data.results;
      },
      error => {
        console.log(error);
      }    )  } }

