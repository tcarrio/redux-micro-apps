import { NgModule, Injector, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { createCustomElement } from '@angular/elements';

import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { UserComponent } from './user.component';
import { UserFormComponent } from './pages/user-form/user-form.component';
import { UserListComponent } from './pages/user-list/user-list.component';
import { CommonModule } from '@angular/common';
import { NgReduxModule } from '@angular-redux/store';

@NgModule({
  imports: [
    CommonModule,
    NgReduxModule,
    FormsModule,
    RouterModule.forChild([
      { path: '', component: UserComponent, children: [
        { path: 'add',  component: UserFormComponent },
        { path: 'list', component: UserListComponent },
        { path: '', redirectTo: 'list' },
      ]},
    ]),
  ],
  declarations: [
    UserComponent,
    UserFormComponent,
    UserListComponent,
  ],
  entryComponents: [
    UserComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class UserModule { }
