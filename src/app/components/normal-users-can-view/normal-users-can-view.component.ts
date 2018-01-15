import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-normal-users-can-view',
  template: `
      Normal users can see this
  `,
  styles: [`
    :host {
      width: 100vw;
      border: 1px solid black;
      margin-bottom: 20px;
      padding: 4px;
    }
  `]
})
export class NormalUsersCanViewComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
