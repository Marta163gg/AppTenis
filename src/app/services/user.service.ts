import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule, HttpResponse, HttpHeaders } from '@angular/common/http';
import {GLOBAL} from './global';
import {map} from 'rxjs/operators';
import { Observable } from 'rxjs';


@Injectable({ providedIn: 'root' })
export class UserService{
	public url: string;

	constructor(private _http: HttpClient){
		this.url = GLOBAL.url;
	}

	// register(user_to_register){
	// 	let params = JSON.stringify(user_to_register);
	// 	let headers = new Headers({'Content-Type': 'application/json'});

	// 	return this._http.post(this.url + 'register', params, {headers: headers}).map(res => res.json());
	// }
}