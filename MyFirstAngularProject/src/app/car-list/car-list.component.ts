import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Car } from '../models/Car';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})
export class CarListComponent implements OnInit {
  @Input()
  carList : Array<Car> = new Array<Car>();

  @Output()
  selectedCarEvent = new EventEmitter<Car>();

  constructor() { }

  ngOnInit(): void {
  }

  selectCar(car : Car){
    this.selectedCarEvent.emit(car);
  }
}
