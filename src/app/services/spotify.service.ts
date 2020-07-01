import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable()
export class SpotifyService {
  apikey =
    'Bearer BQDSj_gInAR-uLzwap_IMHc04-83cVy8sbCovC2TCNNp1pQGhDWl3NboGr-cPyKvjmjkqVKekg7rNWGBUW8';

  constructor(private http: HttpClient) {
    console.log('spotify services listo');
  }
  getNewReleases() {
    const headers = new HttpHeaders({
      Authorization: this.apikey,
    });
    return this.http
      .get('https://api.spotify.com/v1/browse/new-releases', { headers })
      .pipe(
        map((data: any) => {
          console.log(data);
          return data.albums.items;
        })
      );
  }

  getArtista(termino: string) {
    const headers = new HttpHeaders({
      Authorization: this.apikey,
    });
    return this.http
      .get(`https://api.spotify.com/v1/search?q=${termino}&type=artist`, {
        headers,
      })
      .pipe(
        map((data: any) => {
          // console.log(data);
          // console.log('retorno del servicio-----');
          return data.artists.items;
        })
      );
  }
}
