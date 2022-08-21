import { Component } from '@angular/core';
import {Router, ActivatedRoute, Params } from '@angular/router';
import { User } from '../../models/user';

@Component({
  selector: 'registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})

export class RegistroComponent {

  public title: String;
  public user: User;

  constructor(private _route: ActivatedRoute, private _router: Router){
    this.title = 'Pagina de registro de nuevo usuario';
    this.user = new User('','','','','','ROLE_USER','');
  }

  onSubmit(){
    console.log(this.user);
  }
}


