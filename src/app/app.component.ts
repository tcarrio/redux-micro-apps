import { element } from 'protractor';
import { Component } from '@angular/core';
import { Subject } from 'rxjs';
import { StateService } from './state.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

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
    clientC: {
      loaded: false,
      path: 'client-c/main.js',
      element: 'client-c'
    },
    clientD: {
      loaded: false,
      path: 'client-d/main.js',
      element: 'client-d'
    },
  };
}
