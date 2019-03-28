import { Component } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.scss']
})
export class Page1Component  {

  username: string;

  constructor(private usersService: UsersService) { }

  handleSubmit(): void {
    if (this.username) {
      this.usersService.add(this.username);
      this.username = '';
    }
  }
}
