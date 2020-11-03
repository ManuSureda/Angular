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
  brand : string;//[(ngModel)]
  model : string;

  //IMPORTANTE, si usas el [(ngModel)] te tenes que ir al app.module.ts y agregar esto
  //import { FormsModule } from '@angular/forms';
  // imports: [
  //   BrowserModule,
  //   AppRoutingModule,
  //   FormsModule//<-- ESE
  // ],
    

  constructor() { }

  ngOnInit(): void {
  }

  addCar() {
    let car = new Car();
    car.brand = this.brand; //los this.brand fueron cargados en el form y su valor se modifico gracias al [(ngModel)], si lo cambias aca, tambien se cambia en el html
    car.model = this.model;

    this.carList.push(car);
  }
}
