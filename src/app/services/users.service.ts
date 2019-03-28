import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private _users: string[] = [];

  get users(): string [] {
    return [ ...this._users ];
  }

  add(username: string): void {
    this._users.push(username);
  }
}
