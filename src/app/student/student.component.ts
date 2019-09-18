import { Component, OnInit } from '@angular/core';
import {StudentService} from '../student.service';
import {Student} from '../student';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  studentList: Student[];
  constructor(private studentService: StudentService) { }

  ngOnInit() {
    this.getAllStudent();
  }

  getAllStudent() {
    this.studentService.getAll().subscribe(data => {
      console.log(data);
      this.studentList = data;
    });
  }

  deleteStudent(id: number) {

  }

}
