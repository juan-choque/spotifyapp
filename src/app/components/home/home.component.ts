import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent implements OnInit {

    nuevasCanciones: any[] = [];

    loading: boolean;
    error = false;
    message: string;
  constructor(private spotify: SpotifyService) {

    this.loading = true;
    this.spotify.getNewReleases().subscribe( (data: any) => {
      console.log(data);
      this.nuevasCanciones = data;
      this.loading = false;
    }, (errorservicio) => {
        this.error = true;
        console.log(errorservicio);
        this.loading = false;
        this.message = errorservicio.error.error.message;
    });
   }

  ngOnInit(): void {
  }

}
