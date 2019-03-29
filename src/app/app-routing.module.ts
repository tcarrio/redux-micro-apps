import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NoPageComponent } from './components/no-page/no-page.component';


const routes: Routes = [
  // micro-app (angular element) imported through lazily-loaded module
  { path: 'home', loadChildren: './features/home/home.module#HomeModule' },

  // micro-app, itself, lazily-loaded
  { path: 'client-b', loadChildren: '../../projects/client-b/src/app/app.module#AppModule' },

  // shell-app component
  { path: '404', component: NoPageComponent },

  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/404' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
