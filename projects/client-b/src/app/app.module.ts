import { NgModule, Injector, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { createCustomElement } from '@angular/elements';

import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { CommonModule } from '@angular/common';
import { NgReduxModule } from '@angular-redux/store';

@NgModule({
  imports: [
    CommonModule,
    NgReduxModule,
    FormsModule,
    RouterModule.forChild([
      { path: '', component: AppComponent, children: [
        { path: 'add',  component: Page1Component },
        { path: 'list', component: Page2Component },
        { path: '', redirectTo: 'list' },
      ]},
    ]),
  ],
  declarations: [
    AppComponent,
    Page1Component,
    Page2Component,
  ],
  entryComponents: [
    AppComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule { }
