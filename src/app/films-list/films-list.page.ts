import { Component, OnInit } from '@angular/core';
import { FilmService } from '../service/film.service';

@Component({
  selector: 'app-films-list',
  templateUrl: './films-list.page.html',
  styleUrls: ['./films-list.page.scss'],
})
export class FilmsListPage implements OnInit {
  films!: any;

  constructor(
    private Film: FilmService
  ) { }

  ngOnInit(): void {
    this.Film.getAllFilms().subscribe((data: any) => {
      this.films = data;
    });
  }

  /* films = [
    {
      id: 1,
      title: 'titre 1',
      img: '/assets/img/noimg.jpg',
      param1: 'param 1',
      param2: 'param 2'
    },
    {
      id: 2,
      title: 'titre 2',
      img: '/assets/img/noimg.jpg',
      param1: 'param 1',
      param2: 'param 2'
    },
    {
      id: 3,
      title: 'titre 3',
      img: '/assets/img/noimg.jpg',
      param1: 'param 1',
      param2: 'param 2'
    },
    {
      id: 4,
      title: 'titre 4',
      img: '/assets/img/noimg.jpg',
      param1: 'param 1',
      param2: 'param 2'
    }
  ]; */

}
