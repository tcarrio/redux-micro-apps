import { Component } from '@angular/core';
import { dispatch } from '@angular-redux/store';
import { addUser, IUser } from '../store';

@Component({
  selector:    'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.scss']
})
export class Page1Component  {

  username: string;

  @dispatch()
  doAddUser = (user: IUser) => addUser(user);

  handleSubmit(): void {
    if (this.username) {
      this.doAddUser({ name: this.username });
      this.username = '';
    }
  }
}
