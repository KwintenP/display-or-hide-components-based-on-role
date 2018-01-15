import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-authors-can-view',
  template: `
      Authors can see this
  `,
  styles: [`
    :host {
      width: 100vw;
      border: 1px solid yellow;
      margin-bottom: 20px;
      padding: 4px;
    }
  `]
})
export class AuthorsCanViewComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
