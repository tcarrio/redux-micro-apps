import { Observable } from 'rxjs';
import { Component, ViewEncapsulation, Input, Output, EventEmitter, OnInit, OnDestroy, OnChanges } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '../environments/environment';

// Redux
import { RegistryService } from 'src/app/services/registry.service';
import reducer from './store';

@Component({
  selector: 'user-root',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class UserComponent implements OnInit {

  constructor(
    private router: Router,
    private registryService: RegistryService
  ) { }

  ngOnInit() {
    this.registryService.get().register('client-b', reducer);

    // Manually triggering initial navigation for @angular/elements?!
    this.router.initialNavigation();

    // Standalone mode
    if (environment.standalone) {
      this.router.navigate(['/client-b/add']);
    }
  }
}
