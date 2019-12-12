import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-table-component',
  templateUrl: './app.table.component.view.html'
})
export class TableComponent implements OnInit {
  private dataSource: Array<any>;
  private dataSourceUIGenerator: Array<any>;
  headers: Array<string>;
  @Output()
  notify: EventEmitter<any>;
  constructor() {
    this.dataSource = new Array<any>();
    this.headers = new Array<string>();
    this.dataSourceUIGenerator = new Array<any>();
    this.notify = new EventEmitter<any>();
  }

  // write setter and getter to accept the data for component
  @Input()
  set DataSource(v: Array<any>) {
    this.dataSource = v;
    if(this.dataSource.length > 0) {
      // generate headers
        // write logic for generating headers and rows
        for(let p in this.dataSource[0]) {
          this.headers.push(p);
        }
    }
  }
  get DataSource(): Array<any> {
    return this.dataSource;
  }

  // method to emit an event, obj is the payload
  onNotify(obj: any): void {
    this.notify.emit(obj);
  }
  ngOnInit(): void { }
}
