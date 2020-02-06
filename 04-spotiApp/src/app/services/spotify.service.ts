import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'  // forma automatica de importar servicios -- en versiones anteriores era necesario imortarlas en el app.component.ts en providers
})
export class SpotifyService {

  constructor(private http: HttpClient) { 
    console.log("Service listo para usar");
  }
  getQuery(query:string){
    const url = `https://api.spotify.com/v1/${ query }`; 

    const headers = new HttpHeaders({
      'Authorization':'Bearer BQCyS-aCReUtV9PpVoURhH4LlXCE51ssXlPT_zfPdEILU0hqqIcvsf_mSFuCtg-1N_VplcDJ657chSxwMSA'
    });

    return this.http.get(url, {headers});
  }

  getNewReleases(){
    return  this.getQuery('browse/new-releases').pipe(
      map(data => data['albums'].items)
    );
        
  }

  getArtistas(termino:string){
    // map  ---> filtra la informacion que queremos regresar  
    return  this.getQuery(`search?query=ed+${termino}&type=artist&offset=0&limit=15`).pipe(
      map((data: any) => data.artists.items)
    );
  }

  getArtista(id:string){
    // map  ---> filtra la informacion que queremos regresar  
    return  this.getQuery(`artists/${id}`);

    // .pipe(
    //   map((data: any) => data.artists.items)
    // );
  }


  getTopTracks(id:string){
    return  this.getQuery(`artists/${id}/top-tracks?country=us`).pipe(
        map(data => data['tracks'])
      );
  }
}
