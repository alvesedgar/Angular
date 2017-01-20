import { Component, OnInit, OnChanges, AfterViewInit, OnDestroy, Input } from '@angular/core';
import { IShip } from '../model/Ship';
import { ShipService } from '../services/ship.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit, OnDestroy, OnChanges, AfterViewInit {

  @Input() ship: IShip;

  constructor(private shipService: ShipService) {
    //console.log(this.shipService.getShip());
  }

  ngOnInit() {
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

