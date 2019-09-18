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

  ngOnInit() {
    this.studentForm = this.formBuilder.group({
      id: [],
      name: ['', Validators.required],
      age: ['', Validators.required],
      email: ['', Validators.required],
      birthday: ['', Validators.required]
    });
  }

  onSubmit() {
    this.studenService.create(this.studentForm.value).subscribe(
      data => {
        this.router.navigate(['student0']);
    });
  }

}
