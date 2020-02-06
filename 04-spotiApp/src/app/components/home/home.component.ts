import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  nuevasCanciones: any[] = [];
  loading: boolean;

  error:boolean = false;
  msgError: String;

  constructor(private spotify: SpotifyService) {
    this.loading = true;
    this.error = false;
    this.spotify.getNewReleases().subscribe((data:any) => {
      // console.log(data);
      this.loading = false;
      this.nuevasCanciones = data;
    }, ( errorServicio ) => {
      this.msgError = errorServicio.error.error.message;
      this.loading = false; 
      this.error = true;
    } );
  }

  ngOnInit() {

  }

}
