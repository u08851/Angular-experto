import { Component, OnInit } from '@angular/core';
import { Heroe, HeroesService } from 'src/app/servicios/heroes.service';

import { ActivatedRoute } from "@angular/router";


@Component({
  selector: 'app-buscarheroe',
  templateUrl: './buscarheroe.component.html',
  styleUrls: ['./buscarheroe.component.css']
})
export class BuscarheroeComponent implements OnInit {

  heroes:Heroe[] = [];

  constructor(private heroesService:HeroesService, private activatedRoute:ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.heroes =  this.heroesService.buscarHeroes(params['termino']);  
    })
  }

  

}
