import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';
import { createCustomElement } from '@angular/elements';

import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    BrowserModule,
  ],
  declarations: [
    AppComponent,
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
