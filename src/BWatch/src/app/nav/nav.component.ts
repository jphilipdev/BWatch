import { Component } from '@angular/core';

@Component({
  selector: 'navigation',
  templateUrl: './nav.html',
  styles: [`
    #nav-container {
      height: 160px;
      display: flex;
      justify-content: flex-end;
      align-items: flex-end;
      background-image: url('assets/joshua-fuller-328300-unsplash.jpg');
      background-attachment: local;
      background-position: top right;
      background-repeat: no-repeat;
    }
    #nav-list { display: flex; list-style-type: none; }
    #nav-list li { width: 8rem; }
    #nav-list li a { color: #a70000; font-weight: 700; }
    #nav-list li a:hover { border-bottom: 2px solid #a70000; text-decoration: none; }
    #nav-list li a.active { border-bottom: 2px solid #a70000; }
  `]
})

export class NavComponent { }
