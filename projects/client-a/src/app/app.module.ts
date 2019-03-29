import { NgModule, Injector, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { createCustomElement } from '@angular/elements';

import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgReduxModule } from '@angular-redux/store';

import { AppComponent } from './app.component';


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
    const elements: any[] = [
      [ AppComponent, 'client-a' ],
    ];

    for (const [component, name] of elements) {
      const el = createCustomElement(component, { injector: this.injector });
      customElements.define(name, el);
    }
  }

  ngDoBootstrap() { }
}
