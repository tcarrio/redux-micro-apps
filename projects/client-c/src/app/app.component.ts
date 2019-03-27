import { Component, Input, Output, EventEmitter, ViewEncapsulation, OnInit } from '@angular/core';

@Component({
  selector: 'client-c',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class AppComponent implements OnInit {

  @Input('state')
  set state(state: string) {
    console.debug('client-c received state', state);
  }

  @Output() message = new EventEmitter<any>();

  ngOnInit() {
    // just for demonstration!
    setTimeout(() => {
      this.message.next('client c initialized!');
    }, 2000);
  }
}
