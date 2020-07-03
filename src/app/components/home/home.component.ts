import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';
import { Subscriber } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [],
})
export class HomeComponent {
  loading: boolean;

  nuevasCanciones: any[] = [];

  constructor(private spotify: SpotifyService) {
    this.loading = true;

    this.spotify.getNewRelease().subscribe((data: any) => {
      //console.log(data);
      this.nuevasCanciones = data;
      this.loading = false;
    });
  }
}
