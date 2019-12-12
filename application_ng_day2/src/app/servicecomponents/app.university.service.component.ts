import { Component, OnInit } from '@angular/core';
import { HttpService } from '../utilitymodule/services/app.http.service';
import { University } from '../models/app.student.model';

@Component({
  selector: 'app-university-service-component',
  templateUrl: './app.university.service.view.html'
})
export class UniversityServiceComponent implements OnInit {
  data: string;
  unv: University;
  unvs: Array<University>;
  constructor(private serv: HttpService) {
    this.unv = new University(0, '', '', '');
    this.unvs = new Array<University>();
    console.log('Constructor Called');
   }

   private loadData(): void {
      this.serv.getData().subscribe((resp) => {
          this.unvs = resp;
          this.data = JSON.stringify(this.unvs);
      });
   }

  ngOnInit(): void {
    console.log('Calling Data from Service');
    this.loadData();
  }
  save(): void {
    this.unv = new University(0, 'UNV-2001', 'Alaska-East', 'Alaska');
    this.serv.postData(this.unv).subscribe((resp) => {
       this.unvs.push(resp);
       this.data = '';
       this.data = JSON.stringify(this.unvs);
    });
  }
}
