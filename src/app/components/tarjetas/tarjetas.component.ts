import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tarjetas',
  templateUrl: './tarjetas.component.html',
  styleUrls: ['./tarjetas.component.css']
})
export class TarjetasComponent implements OnInit {

  @Input() items: any[] = [];
  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  verArtista( item: any ): void{
    // console.log(item);

    let artistaId;
    if (item.type === 'artist'){
        artistaId = item.id;
    }else {
      artistaId = item.artists[0].id;
    }
    this.route.navigate(['/artist', artistaId]);

  }
}
