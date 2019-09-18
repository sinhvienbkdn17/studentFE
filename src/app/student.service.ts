import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Student} from './student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private baseUrl = 'http://localhost:8080/student';

  httpOptions = {
    headers: new HttpHeaders({'Content-Type' : 'application/json'})
  };

  constructor(private http: HttpClient) { }

  // get customer (student)
  getAll(): Observable<Student[]> {
    return this.http.get<Student[]>(`${this.baseUrl}`);
  }

  getById(id: number): Observable<Student> {
    return this.http.get<Student>(`${this.baseUrl}/${id}`);
  }

  create(student: Student): Observable<Student> {
    return this.http.post<Student>(`${this.baseUrl}`, student, this.httpOptions);
  }

  edit(student: Student): Observable<Student> {
    return this.http.put<Student>(`${this.baseUrl}/${student.id}`, student, this.httpOptions);
  }

  delete(id: number): Observable<Student> {
    return this.http.delete<Student>(`${this.baseUrl}/${id}`);
  }
}
