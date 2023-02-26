import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment.prod'
@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) {
    console.log('esta listo el servicio');

  }

  getQuery(query: string): any{
      const url = `https://api.spotify.com/v1/${ query }`;
      const headers = new HttpHeaders({
        Authorization: environment.token
      });

      return this.http.get( url, { headers});
  }
  getNewReleases(): any{

     return  this.getQuery('browse/new-releases')
      .pipe( map( (data: any) => {
      return  data.albums.items;
      }));

  }

  getArtistas( termino: string): any{

    return this.getQuery(`search?q=${ termino }&type=artist&limit=15`)
        .pipe( map( (data: any) => {
            return  data.artists.items;
        }));
  }

  getArtista( id: string): any{
    return this.getQuery(`artists/${id}`);
  }
  getTopTrack( id: string): any{
    return this.getQuery(`artists/${ id }/top-tracks?country=us`)
        .pipe( map( (data: any) => {
            return  data.tracks;
        }));
  }
}
