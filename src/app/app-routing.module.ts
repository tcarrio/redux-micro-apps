import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { NoPageComponent } from './pages/no-page/no-page.component';
import { ClientRoutingComponent } from './pages/client-routing/client-routing.component';

const routes: Routes = [
  { path: 'home',     component: HomeComponent },
  { path: '404',      component: NoPageComponent },
  { path: 'client-b', component: ClientRoutingComponent, pathMatch: 'prefix' },

  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/404' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
