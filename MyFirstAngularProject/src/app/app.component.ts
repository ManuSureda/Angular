import { Component } from '@angular/core';
import { Student } from './models/student';

@Component({
  selector: 'app-root',//asi se va a llamar el tag html
  templateUrl: './app.component.html',// el template que va a usar
  styleUrls: ['./app.component.css']// el style
})
export class AppComponent {
  title = 'My First Angular Project';//en el template podes acceder a esto como {{ title }} 
  name = 'Manu jeje xd';
  fruits = ['tomatoe','kiwi','orange','apple'];
  student = new Student();

  constructor(){
    //let student = new Student(); se ve que es mejor declararlo arriba
    this.student.firstName = "juan";
    this.student.lastName = "Gomez";
  }
}
