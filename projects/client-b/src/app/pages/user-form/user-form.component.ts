import { Component } from '@angular/core';
import { dispatch } from '@angular-redux/store';
import { addUser, IUser } from '../../store';

@Component({
  selector:    'user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent  {

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
