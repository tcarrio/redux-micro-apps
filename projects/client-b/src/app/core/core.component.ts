import { Component } from '@angular/core';

@Component({
  template: `
    <div id="client-a">
      <div class="card">
        <div class="content">
          Users: <a routerLink="add">Add</a> | <a routerLink="view">View All</a>
        </div>
      </div>
      <router-outlet></router-outlet>
    </div>
  `,
})
export class CoreComponent { }
