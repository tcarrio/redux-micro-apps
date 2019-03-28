import { StateService } from '../../services/state.service';
import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';


@Component({
    selector: 'sidebar-cmp',
    templateUrl: 'sidebar.component.html',
})

export class SidebarComponent {
    constructor(
      private stateService: StateService,
      private userService: UsersService,
    ) { }

  get userCount(): number {
      return this.userService.users.length;
    }

    sendState() {
      this.stateService.setState('Info from Shell');
    }
}
