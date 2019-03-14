import { Component } from '@angular/core';

@Component({
  selector: 'expand-panel',
  templateUrl: './expandPanel.html'
})

export class ExpandPanel {

  hidden: boolean

  constructor() {
    this.hidden = true;
  }

  clickHandler() {
    this.hidden = !this.hidden;
  }
}
