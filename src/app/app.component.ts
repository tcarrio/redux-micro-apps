import { Component } from '@angular/core';
import { select, NgRedux } from '@angular-redux/store';
import { Observable } from 'rxjs';
import { IAppState } from './store';

@Component({
  selector:    'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  @select(['shell', 'debugFlag'])
  readonly debugFlag: Observable<boolean>;

  @select(['shell', 'userCount'])
  readonly userCount: Observable<number>;

  get reduxState() {
    return this.ngRedux.getState();
  }

  constructor(private ngRedux: NgRedux<IAppState>){ }
}
