import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from "@angular/router"; // para captura il id de la url

import { HeroesService } from "../../servicios/heroes.service";

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: []
})
export class HeroeComponent implements OnInit {

  heroe:any = {};

  constructor(private activatedRoute: ActivatedRoute, private _serviceHeroes: HeroesService) { 
    this.activatedRoute.params.subscribe(params => { 
      this.heroe = this._serviceHeroes.getHeroe(params['id']);
      // console.log(this.heroe);
    });
  }

  ngOnInit() {
  }

 

}
