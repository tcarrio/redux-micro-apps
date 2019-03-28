import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

// Modules
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

// Components
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { WidgetContainerComponent } from './components/widget-container/widget-container.component';

// Pages
import { HomeComponent } from './pages/home/home.component';
import { NoPageComponent } from './pages/no-page/no-page.component';
import { ClientRoutingComponent } from './pages/client-routing/client-routing.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    NavbarComponent,
    WidgetContainerComponent,
    HomeComponent,
    NoPageComponent,
    ClientRoutingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
