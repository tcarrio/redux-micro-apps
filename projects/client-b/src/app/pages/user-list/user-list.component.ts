import { Component } from '@angular/core';
import { select } from '@angular-redux/store';
import { Observable } from 'rxjs';
import { IUser } from '../../store';

@Component({
  selector:    'user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent {

  @select(['client-b', 'users'])
  readonly users: Observable<IUser[]>;
}
