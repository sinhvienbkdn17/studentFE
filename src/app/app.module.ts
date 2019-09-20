import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentComponent } from './student/student.component';
import {HttpClientModule} from '@angular/common/http';
import { StudentcreateComponent } from './studentcreate/studentcreate.component';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import { StudenteditComponent } from './studentedit/studentedit.component';
import {DatePipe} from '@angular/common';


@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    StudentcreateComponent,
    StudenteditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
