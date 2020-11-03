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

  @Output()//con esto haces un obcserbabl y con el emit de abajo le estas informando de que cambio algo
  selectedCarEvent = new EventEmitter<Car>();//selectedCarEvent esta en el input del app.component.html

  constructor() { }

  ngOnInit(): void {
  }

  selectCar(car : Car){
    this.selectedCarEvent.emit(car);//esto nos devuelve al app.compounent que recibe un evento (el cual contiene car)
  }
}
