import { Component } from '@angular/core';

@Component({
  selector: 'navigation',
  templateUrl: './nav.html',
  styles: [`
    #nav-container { display: flex; justify-content: flex-end; align-items: flex-end; background-color: orange; height: 10rem; }
    #nav-list { display: flex; list-style-type: none; }
    #nav-list li { width: 8rem; }
    .active { color: red }
  `]
})

export class NavComponent { }
