import { Injectable } from '@angular/core';
import { Student } from '../models/student';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StudentAsyncService {
  private apiURL = 'https://utn-adv.com/api/students/'//creo q esa api no anda

  constructor(private http: HttpClient) { }

  getAll(): Promise<any>{
    return this.http.get(this.apiURL)
      .toPromise();
  }

  getById(studentId: number): Promise<any>{
    return this.http.get(this.apiURL + studentId)
      .toPromise();
  }

  add(student: Student): Promise<any>{
    const httpOptions = {
      headers: new HttpHeaders({
        'content-Type': 'application/json'
      })
    };

    return this.http.post(this.apiURL, student, httpOptions)
      .toPromise();
  }
}
