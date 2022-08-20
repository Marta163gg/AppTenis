import { Component } from '@angular/core'

@Component({
	selector: 'organizacion',
	templateUrl: './organizacion.component.html',
	styleUrls: ['./organizacion.component.css']
})
export class OrganizacionComponent{
	public titulo;
	public nombreP?: string; //el ? es para que deje inicializarlo

	constructor(){
		this.titulo='Esta es la organizacion';
	}

	mostrarNombre(){
		console.log(this.nombreP);
	}

	verDatos(event: Event){
		console.log(event);
	}
}