import { Component, Input, OnInit } from '@angular/core';
import { Car } from '../models/Car';


@Component({
  selector: 'app-car-add',
  templateUrl: './car-add.component.html',
  styleUrls: ['./car-add.component.css']
})
export class CarAddComponent implements OnInit {
  @Input()
  carList : Array<Car> = new Array<Car>();
  brand : string;
  model : string;

  constructor() { }

  ngOnInit(): void {
  }

  addCar() {
    let car = new Car();
    car.brand = this.brand;
    car.model = this.model;

    this.carList.push(car);
  }
}
