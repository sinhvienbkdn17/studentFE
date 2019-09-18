import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {StudentComponent} from './student/student.component';
import {StudentcreateComponent} from './studentcreate/studentcreate.component';


const routes: Routes = [
  {path: 'student', component: StudentComponent},
  {path: 'student-create', component: StudentcreateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
