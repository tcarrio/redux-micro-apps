import { RegistryService } from '../../services/registry.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import reducer, { toggleDebugging } from 'src/app/store';
import { Observable } from 'rxjs';
import { select, dispatch } from '@angular-redux/store';

@Component({
    selector:    'sidebar-cmp',
    templateUrl: 'sidebar.component.html',
})

export class SidebarComponent implements OnInit {

  @select(['shell', 'userCount'])
  readonly userCount: Observable<number>;

  constructor(private registryService: RegistryService) { }

  ngOnInit() {
    this.registryService.get().register('shell', reducer);
  }

  @dispatch() debug = () => toggleDebugging();
}
