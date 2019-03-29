import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';
import { createCustomElement } from '@angular/elements';
import { CommonModule } from '@angular/common';

import { NgReduxModule } from '@angular-redux/store';

interface IAppState {};

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    CommonModule,
    NgReduxModule
  ],
  entryComponents: [
    AppComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {

  constructor(private injector: Injector) {
    this.ngDoBootstrap();
  }

  ngDoBootstrap() {
    const elements: any[] = [
      [ AppComponent, 'client-a' ],
    ];

    for (const [component, name] of elements) {
      const el = createCustomElement(component, { injector: this.injector });
      customElements.define(name, el);
    }
  }
}
