import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {StudentComponent} from './student/student.component';
import {StudentdetailComponent} from './studentdetail/studentdetail.component';


const routes: Routes = [
  {path: 'student', component: StudentComponent},
  {path: 'student/:id' , component: StudentdetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
