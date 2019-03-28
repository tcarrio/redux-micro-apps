import { Component } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.scss']
})
export class Page2Component {

  get users(): string[] {
    return this.usersService.users;
  }

  constructor(private usersService: UsersService) { }
}
