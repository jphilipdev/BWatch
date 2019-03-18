import { Component } from '@angular/core';
import { breakpoint } from './styles/constants';

@Component({
  selector: 'main',
  templateUrl: './main.html',
  styles: [`
    #main-container { display: flex; flex-direction: column; align-items: center; height: 100vh; background-color: floralwhite; }
    #app-container { width: ${breakpoint.lg}; height: 100vh; background-color: antiquewhite; }
  `]
})

export class MainComponent { }
