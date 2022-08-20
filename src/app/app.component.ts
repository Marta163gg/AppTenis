import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = ' Tenis La Laguna';
  emailContacto? : string;

  ngOnInit(){
    console.log(localStorage.getItem('emailContacto')); //para que quede guardado
  }
}
