import { Component } from '@angular/core';

@Component({
  selector: 'navigation',
  templateUrl: './nav.html',
  styles: [`
    #nav-list { display: flex; list-style-type: none; }
    .active { color: red }
  `]
})

export class NavComponent { }
