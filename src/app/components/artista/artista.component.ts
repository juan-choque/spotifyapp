import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styles: [
  ]
})
export class ArtistaComponent implements OnInit {

  artista: Observable<any>;
  topTracks: any[] = [];

  loading: boolean;

  constructor( private activeroute: ActivatedRoute, private spotify: SpotifyService) {

    this.loading = true;
    this.activeroute.params.subscribe( params => {
      // console.log( params.id);
      this.getArtista(params.id);
      this.getTopTrack(params.id);

    });
  }

  ngOnInit(): void {
  }

  getArtista( id: string): any{
      this.loading = true;
      this.spotify.getArtista( id).subscribe( (data: any) => {
      console.log(data);
      this.artista = data;
      this.loading = false;
    });

  }
  getTopTrack( id: string): any{
    this.spotify.getTopTrack( id).subscribe( (topTrack: any) => {
    console.log(topTrack);
    this.topTracks = topTrack;
  });

}
}
