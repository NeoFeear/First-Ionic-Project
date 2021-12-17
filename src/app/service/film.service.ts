import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { map } from 'rxjs/operators';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Film } from '../models/film.model';

@Injectable({
  providedIn: 'root'
})

export class FilmService {
  filmsRef: AngularFirestoreCollection<Film>;
  private dbPath = '/films';

  constructor(
    private db: AngularFirestore
  ) {
    this.filmsRef = db.collection(this.dbPath);
  }

  getAllFilms(): any {
    return this.filmsRef.snapshotChanges().pipe(
      map((changes: any) => changes.map((doc: any) => ({
        id: doc.payload.doc.id,
        ...doc.payload.doc.data()
      })))
    );
  }

  saveNewFilm(film: Film): any {
    return new Observable(obs => {
      this.filmsRef.add({
        ...film
      }).then(() => {
        obs.next();
      });
    });
  }

  get(id: any): any {
    return new Observable(obs => {
      this.filmsRef.doc(id).get().subscribe(res => {
        obs.next({
          id: res.id,
          ...res.data()
        });
      });
    });
  }

  update(film: Film) {
    return new Observable(obs => {
      this.filmsRef.doc(film.id).update(film);
      obs.next();
    });
  }

  delete(id: any) {
    this.filmsRef.doc(id).delete();
  }
}
