import { Component } from '@angular/core';
import { IShip } from './model/Ship';
import { ShipService } from './services/ship.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[ShipService ]
})
export class AppComponent {

  ships: Array<IShip> = [];
  selectedShip: IShip;

  constructor(private shipService: ShipService) {
    this.selectedShip=this.ships[0];
  }

  setSelectItem(ship: IShip) {
    this.selectedShip = ship;
  }

  ngOnInit() {
    this.shipService.getShip().subscribe(x=>{this.ships=x;console.log(x);});
    console.log('ngOnInit');
  }

  ngOnChanges() {
    console.log('ngOnChanges');
  }

  ngOnDestroy() {
    console.log('ngOnDestroy');
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit');
  }

}

