import { Component, OnInit, Input } from '@angular/core';
import { IShip } from '../../models/ship';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  @Input() ship: IShip;

  constructor() {}

  ngOnInit() {
  }

}
