import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { NoPageComponent } from './pages/no-page/no-page.component';
import { ClientRoutingComponent } from './pages/client-routing/client-routing.component';

const routes: Routes = [
  { path: 'home',     loadChildren: './features/home/home.module#HomeModule' },
  { path: 'client-b', loadChildren: '../../projects/client-b/src/app/app.module#AppModule' },
  { path: '404',      component: NoPageComponent },

  { path: '', redirectTo: '/home', pathMatch: 'full' },
  // { path: '**', redirectTo: '/404' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
