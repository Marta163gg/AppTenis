import { Component } from '@angular/core';
import {Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'registro',
  templateUrl: './registro.component.html'
})

export class RegistroComponent {

  public title: String;

  constructor(private _route: ActivatedRoute, private _router: Router){
    this.title = 'Registro';
  }

}