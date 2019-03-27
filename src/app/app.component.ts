import { element } from 'protractor';
import { Component } from '@angular/core';
import { Subject } from 'rxjs';
import { StateService } from './state.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor() { }

  config = {
    clientA: {
      loaded: false,
      path: 'client-a/main.js',
      element: 'client-a'
    },
    clientB: {
      loaded: false,
      path: 'client-b/main.js',
      element: 'client-b'
    },
  };
}
