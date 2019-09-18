import { Component, OnInit } from '@angular/core';
import {Student} from '../student';
import {StudentService} from '../student.service';
import {ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-studentdetail',
  templateUrl: './studentdetail.component.html',
  styleUrls: ['./studentdetail.component.css']
})
export class StudentdetailComponent implements OnInit {
  customer: Student;
  constructor(private studentService: StudentService, private route: ActivatedRoute) { }

  ngOnInit() {
    const id = +this.route.snapshot.params.id;
    // this.getById(id);
  }

  // getById(id: number) {
  //     this.studentService.
  // }

}
