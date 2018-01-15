import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-only-for-admins',
  template: `
      Only admins can see this section
  `,
  styles: [`
    :host {
      width: 100vw;
      border: 1px solid red;
      margin-bottom: 20px;
      padding: 4px;
    }
  `]
})
export class OnlyForAdminsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
