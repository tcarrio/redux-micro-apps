import { Component, ViewEncapsulation, Input, Output, EventEmitter, OnInit, OnChanges } from '@angular/core';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class AppComponent implements OnInit {

  @Input('state')
  set state(state: string) {
    console.debug('client-d received state', state);
  }

  @Output() message = new EventEmitter<any>();

  ngOnInit() {
    // just for demonstration!
    setTimeout(() => {
      this.message.next('client d initialized!');
    }, 2000);

  }
}
