import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {StudentComponent} from './student/student.component';
import {StudentcreateComponent} from './studentcreate/studentcreate.component';
import {StudenteditComponent} from './studentedit/studentedit.component';


const routes: Routes = [
  {path: 'student', component: StudentComponent},
  {path: 'student/:id', component: StudenteditComponent},
  {path: 'student-create', component: StudentcreateComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
