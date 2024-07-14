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
  movies = [{id:1, title:'peli1', desc:'No tiene descripción', year:2021},{id:2, title:'peli2', desc:'No tiene descripción', year:2022}];
  constructor(private api:ApiService) {
    this.getMovies();
  }
  getMovies = () => {
    this.api.getAllMovies().subscribe (
      data => {
        console.log(data);
        //this.movies = data;  //data.results;
      },
      error => {
        console.log(error);
      }    )  } }

