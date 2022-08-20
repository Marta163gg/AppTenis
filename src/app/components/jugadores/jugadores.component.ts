import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'jugadores',
  templateUrl: './jugadores.component.html'
})
export class JugadoresComponent implements OnInit{
  title = ' Jugadores ';

  ngOnInit(){
    console.log('jugadores.component cargado!!')
  }
}