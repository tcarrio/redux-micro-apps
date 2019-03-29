import { Component } from '@angular/core';
import { addUser } from '../store';
import { dispatch } from '@angular-redux/store';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.scss']
})
export class Page1Component  {

  username: string;

  handleSubmit(): void {
    if (this.username) {
      this.doAddUser({ name: this.username });
      console.log(`this.doAddUser({ name: ${this.username}});`)
      this.username = '';
    }
  }

  // @dispatch() addUser = (user) => ({ type: ADD_USER, user });
  
  // when imported from ../store:
  @dispatch() doAddUser = (user) => addUser(user);
}
