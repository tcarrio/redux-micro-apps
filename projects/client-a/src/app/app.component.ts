import { Component, Input, Output, EventEmitter, ViewEncapsulation, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'client-a',
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

  get userCount(): number {
    return this.usersService.users.length;
  }

  constructor(private usersService: UsersService) { }

  ngOnInit() {
    // just for demonstration!
    setTimeout(() => {
      this.message.next('client a initialized!');
    }, 2000);
  }
}
