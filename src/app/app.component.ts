import { element } from 'protractor';
import { Component } from '@angular/core';
import { Subject } from 'rxjs';
import { StateService } from './services/state.service';
import { UsersService } from './services/users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(userService: UsersService) {
    userService.add('bob');
  }
}
