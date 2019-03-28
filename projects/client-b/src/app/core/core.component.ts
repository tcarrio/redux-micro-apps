import { Component } from '@angular/core';

@Component({
  template: `
    <div id="client-a">
      <div class="card">
        <div class="content">
          <a routerLink="page1">Page 1</a> | <a routerLink="page2">Page 2</a>
        </div>
      </div>
      <router-outlet></router-outlet>
    </div>
  `,
})
export class CoreComponent { }
