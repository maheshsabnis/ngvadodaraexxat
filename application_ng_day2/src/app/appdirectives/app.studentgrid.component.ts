import { Component, OnInit } from '@angular/core';
import { Student } from '../models/app.student.model';
import { StudentLogic } from '../models/app.student.logic';

@Component({
  selector: 'app-studentgrid-component',
  templateUrl: './app.studentgrid.view.html',

})
export class StudentGridComponent implements OnInit {
  student: Student;
  students: Array<Student>;
  private logic: StudentLogic;
  data: string;
  constructor() {
    this.students = new Array<Student>();
    this.logic = new StudentLogic();
    this.student = new Student(0, '', '', '', '');
  }

  ngOnInit(): void {
    this.students = this.logic.getStudents();
  }

  subscribeToData($event) {
    this.data = `Received data from Child as ${JSON.stringify($event)}`;
  }
}
