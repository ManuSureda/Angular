import { Injectable } from '@angular/core';
import { Student } from '../models/student';

//esto le indica al injector de dependencias de angular que se tiene que proveer en la raiz del projecto
@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private studentList = new Array<Student>();//aca la posta seria pegarle a una url pero fue
  private studentId = 0;
  
  constructor() { }

  add(student: Student){
    this.studentId++;
    student.studentId = this.studentId;
    this.studentList.push(student);
  }

  getAll(){
    return this.studentList;
  }

  getById(studentId: number){
    let students = this.studentList.filter(student => {
      return student.studentId == studentId;
    });

    return (students.length > 0) ? students[0] : null;
  }
}
