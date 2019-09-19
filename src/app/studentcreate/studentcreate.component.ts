import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {StudentService} from '../student.service';


@Component({
  selector: 'app-studentcreate',
  templateUrl: './studentcreate.component.html',
  styleUrls: ['./studentcreate.component.css']
})
export class StudentcreateComponent implements OnInit {
  studentForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private router: Router, private studenService: StudentService) { }

  createStudentForm() {
    this.studentForm = this.formBuilder.group({
      id: [],
      name: [''],
      age: [''],
      email: [''],
      birthday: [''],
    });
  }

  ngOnInit() {
    this.createStudentForm();
  }

  onSubmit() {
    this.studenService.create(this.studentForm.value).subscribe(
      data => {
        this.router.navigate(['student']);
        console.log(this.studentForm.value);
      });
  }

}
