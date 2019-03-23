import { Component } from '@angular/core';
import { breakpoint } from './styles/constants';

@Component({
  selector: 'main',
  templateUrl: './main.html',
  styles: [`
    #main-container { display: flex; flex-direction: column; align-items: center; height: 100vh; background-color: floralwhite; }
    #app-container { width: 100%; max-width: ${breakpoint.lg}; height: 100vh; background-color: antiquewhite; }
    #page-container { margin: 2rem; }
  `]
})

export class MainComponent { }
