import { Component, Input } from '@angular/core';

@Component({
  selector: 'expand-panel',
  templateUrl: './expandPanel.html'
})

export class ExpandPanel {

  @Input() title: string

  clickHandler() {

  }
}
