import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import {  map } from 'rxjs/operators';
import { pipe } from 'rxjs';

@Injectable()
export class SpotifyService {

   apikey: string  = 'Bearer BQCbKUBFj1qyJijkZmT9UlvMqHTZpes7BBoQrO_YXnU2o2c5ZRczVaJCGoU8MdKm3rFPwOVjzzYsOwrzjhk'

  constructor(private http: HttpClient) {
    console.log('spotify services listo');
  }
  getNewReleases() {


    const headers = new HttpHeaders({
      'Authorization': this.apikey
    })
    return this.http
      .get('https://api.spotify.com/v1/browse/new-releases', { headers })
               .pipe( map( data =>{
                 console.log(data);
                 return data['albums'].items;
               }));

  }

getArtista( termino: string) {
  const headers = new HttpHeaders({
    'Authorization': this.apikey
  })
  return this.http
    .get(`https://api.spotify.com/v1/search?q=${termino}&type=artist`, { headers })
    .pipe(map(data =>{


      // console.log(data);
      // console.log('retorno del servicio-----');
      return data['artists'].items;

    }))


  }
}
