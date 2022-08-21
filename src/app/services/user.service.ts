import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import {GLOBAL} from './global';
import {map} from 'rxjs/operators';
import { Observable } from 'rxjs';


@Injectable({ providedIn: 'root' })
export class UserService{
	public url: string;

	constructor(private _http: HttpClient){
		this.url = GLOBAL.url;
	}

	register(){
		return "Texto en servicio";
	}
}