import { Observable } from 'rxjs';
import { Component, ViewEncapsulation, Input, Output, EventEmitter, OnInit, OnDestroy, OnChanges } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '../environments/environment';

// Redux
import { RegistryService } from 'src/app/services/registry.service';
import reducer from './store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class AppComponent implements OnInit {

  constructor(private router: Router, private registryService: RegistryService) { }

  ngOnInit() {
    console.log('client-b::ngOnInit')
    this.registryService.get().register('client-b', reducer);

    this.router.initialNavigation(); // Manually triggering initial navigation for @angular/elements ?

    // Standalone mode
    if (environment.standalone) {
      this.router.navigate(['/client-b/add']);
    }
  }
}
