import { Component, OnInit } from '@angular/core';
// the class that procides method for explicit routing
// the ActivatedRoute class is used to subscribe to
// uri to read parameters
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-about-component',
  template: `
     <h2> The About Component</h2>
     <div>{{message}}</div>
     <br>
     <input type="button" value="Navigate to Contact" (click)="navigateToAbout()">
  ` 
})
export class AboutComponent implements OnInit {
  message: string;
  constructor(private router: Router, private act: ActivatedRoute) { 
    this.message = 'I am About Component';
  }

  // subscribe to the parameter
  ngOnInit(): void { 
    this.act.params.subscribe((p) => {
        this.message += p.id;
    });
  }

  navigateToAbout(): void {
    this.router.navigate(['contact']);
  }
}
