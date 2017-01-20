import { Injectable } from '@angular/core';
import{ IShip} from '../model/Ship';
import { Http,Response } from '@angular/http';
import {Observable} from 'rxjs/Observable'
import 'rxjs';

@Injectable() // My be Injectable
export class ShipService {

  constructor(private http: Http) { }

  getShip(): Observable <IShip[]>{
   return  this.http.get('api/ships.json').map((response:Response)=>{
      return <IShip[]> response.json().data;
    });
}

}
