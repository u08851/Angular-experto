import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  mostrar = true;

  frase:any = {
    mensage : "Un gran poder requiere una gran responsabilidad",
    autor : "Ben parker"
  } 

  personajes: string[] = ["Spiderman", "Venus", "Otro Personajes"];

  constructor() { }

  ngOnInit() {
  }

}
