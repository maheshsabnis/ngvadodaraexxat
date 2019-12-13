import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my1-component',
  template: `
     <h3>My Component 1</h3>
     <div>
        I will be lazy loaded
     </div>
  ` 
})
export class My1Component implements OnInit {
  constructor() { }

  ngOnInit(): void { }
}
