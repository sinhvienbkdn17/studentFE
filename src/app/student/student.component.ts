import { Component, OnInit } from '@angular/core';
import {StudentService} from '../student.service';
import {Student} from '../student';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  studentList: Student[];
  constructor(private studentService: StudentService, private router: Router, private route: ActivatedRoute) { }

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
    this.router.navigate(['student'], {relativeTo: this.route});
  }

}
