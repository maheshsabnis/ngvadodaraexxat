import { Component, OnInit } from '@angular/core';
import { UniversitiesData } from '../models/app.data.constants';
import {CommunicationService} from './../utilitymodule/services/app.communication.service';
import { University } from '../models/app.student.model';

@Component({
  selector: 'app-university-component',
  templateUrl: './app.university.view.html'
})
export class UniversityComponent implements OnInit {
  unvs = UniversitiesData;
  university: University;
  // inject the service
  constructor(private serv: CommunicationService) {
    this.university = new University(0, '', '', '');
   }

  ngOnInit(): void { }

  selectData(u: University): void {
    console.log(JSON.stringify(u));
    this.university = u;
    this.serv.onReceiveData(this.university.UniversityName);
  }
}
