import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {StudentService} from '../student.service';
import {DatePipe} from '@angular/common';

@Component({
  selector: 'app-studentedit',
  templateUrl: './studentedit.component.html',
  styleUrls: ['./studentedit.component.css']
})
export class StudenteditComponent implements OnInit {
  studentEditForm: FormGroup;
  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private route: ActivatedRoute,
              private studentService: StudentService,
              public datePipe : DatePipe) { }

  ngOnInit() {
    const id = +this.route.snapshot.params.id;
    this.initForm();
    this.setValueForm(id);
  }

  initForm() {
    this.studentEditForm = this.formBuilder.group({
      id: [],
      name: [''],
      age: [''],
      email: [''],
      birthday: [''],
    });
  }

  setValueForm(id: number) {
    const format = 'MM/dd/yyyy';
    this.studentService.getById(id).subscribe(data => {
      this.studentEditForm.setValue({
        id: '',
        name: data.name,
        age: data.age,
        email: data.email,
        birthday: this.datePipe.transform(data.birthday, format)
      });
      console.log(this.studentEditForm.value);
    });
  }

  onSubmit() {
    const editStuden = {
      id: +this.route.snapshot.params.id,
      name: this.studentEditForm.get('name').value,
      age: this.studentEditForm.get('age').value,
      email: this.studentEditForm.get('email').value,
      birthday: new Date(this.studentEditForm.get('birthday').value)
    };
    console.log(editStuden);
    this.studentService.edit(editStuden).subscribe(data => {
      this.router.navigate(['student']);
      console.log(this.studentEditForm.value);
    });
  }

}
