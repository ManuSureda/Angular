import { Component } from '@angular/core';
import { Car } from './models/Car';

@Component({
  selector: 'app-root',//asi se va a llamar el tag html
  templateUrl: './app.component.html',// el template que va a usar
  styleUrls: ['./app.component.css']// el style
})
export class AppComponent {
  title = 'cars aplication example';
  carList = new Array<Car>();
  car = new Car();

  showSelectedCar(car : Car) {
    this.car = car;
  }
}