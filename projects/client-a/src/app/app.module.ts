import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';
import { createCustomElement } from '@angular/elements';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';

import { RouterModule } from '@angular/router';
import { EmptyComponent } from './empty/empty.component';
import { CoreComponent } from './core/core.component';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: 'client-a', component: CoreComponent, children: [
        { path: 'page1', component: Page1Component },
        { path: 'page2', component: Page2Component },
      ]},
      { path: '**', component: EmptyComponent }
    ], { useHash: true })
  ],
  declarations: [
    AppComponent,
    Page1Component,
    Page2Component,
    EmptyComponent,
    CoreComponent,
  ],
  providers: [],
  bootstrap: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  entryComponents: [
    AppComponent,
  ]
})
export class AppModule {

  constructor(private injector: Injector) { }

  ngDoBootstrap() {
    const elements: any[] = [
      [ AppComponent, 'client-a' ],
    ];

    for (const [component, name] of elements) {
      const el = createCustomElement(component, { injector: this.injector })
      customElements.define(name, el);
    }
  }
}
