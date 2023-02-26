import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
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
        Authorization: 'Bearer BQChlg6qvu1n6KYXG_C_nnaEtTPaxhOfZMt-yG7YoN8OA7wJNWN4JbViPt-uiTnNG12Q8-AEfJ5a6YFwBnyailU62aC0U9VC5TgUr3OlYuPyiPaqeFZR'
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
