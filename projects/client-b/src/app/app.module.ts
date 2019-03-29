import { NgModule, Injector, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { createCustomElement } from '@angular/elements';

import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CoreComponent } from './core/core.component';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { environment } from '../environments/environment';
import { CommonModule } from '@angular/common';
import { NgReduxModule } from '@angular-redux/store';

@NgModule({
  imports: [
    CommonModule,
    NgReduxModule,
    FormsModule,
    RouterModule.forChild([
      { path: '', component: AppComponent, children: [
        { path: 'add-users',  component: Page1Component },
        { path: 'show-users', component: Page2Component },
      ]}
    ]),
  ],
  declarations: [
    AppComponent,
    Page1Component,
    Page2Component,
    CoreComponent,
  ],
  entryComponents: [
    AppComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {

  constructor(private injector: Injector) { }

  ngDoBootstrap() {
    const elements: any[] = [
      [ AppComponent, 'client-b' ],
    ];

    for (const [component, name] of elements) {
      const el = createCustomElement(component, { injector: this.injector })
      customElements.define(name, el);
    }
  }
}
