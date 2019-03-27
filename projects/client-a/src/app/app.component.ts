import { Component, Input, Output, EventEmitter, ViewEncapsulation, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class AppComponent implements OnInit {

  @Input('state')
  set state(state: string) {
    console.debug('client-a received state', state);
  }

  @Output() message = new EventEmitter<any>();

  ngOnInit() {
    // just for demonstration!
    setTimeout(() => {
      this.message.next('client a initialized!');
    }, 2000);
  }
}
