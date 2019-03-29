import { Component } from '@angular/core';

@Component({
    selector:    'navbar-cmp',
    templateUrl: 'navbar.component.html'
})
export class NavbarComponent {

  private _sidebarVisible: boolean = false;

  sidebarToggle(){
    var body = document.getElementsByTagName('body')[0];

    if (this._sidebarVisible == false){
        body.classList.add('nav-open');
        this._sidebarVisible = true;
    }
    else {
        this._sidebarVisible = false;
        body.classList.remove('nav-open');
    }
  }
}
