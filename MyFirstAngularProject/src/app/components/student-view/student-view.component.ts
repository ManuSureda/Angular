import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/services/student.service';
import { Student } from 'src/app/models/student';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-student-view',
  templateUrl: './student-view.component.html',
  styleUrls: ['./student-view.component.css'],
  providers: [ StudentService ] //Generate a specific instance instead of Singleton
})
export class StudentViewComponent implements OnInit {
  private student: Student;
                                                          //ActivatedRoute nos proveera la ruta tipo: www.hola.com/estoyaca/1
  constructor(private studentService: StudentService, private route: ActivatedRoute) { }

  ngOnInit(): void {//la url (route) en este caso es: '...view/:id' por eso el get('id')
    let studentId = Number(this.route.snapshot.paramMap.get('id'));

    this.student = this.studentService.getById(studentId);
  }

}
