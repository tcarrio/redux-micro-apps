import { Component, Input, Output, EventEmitter, ViewEncapsulation, OnInit, OnDestroy } from '@angular/core';
import { RegistryService } from 'src/app/services/registry.service';
import { ReducerRegistry } from 'rdx-reducer-registry';
import { select } from '@angular-redux/store';
import { Observable } from 'rxjs';
import reducer from './store';

@Component({
  selector: 'client-a',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class AppComponent implements OnInit, OnDestroy {

  @select(['client-a', 'userCount'])
  readonly userCount: Observable<number>;

  constructor(private registryService: RegistryService) {
  }

  ngOnInit() {
    this.registryService.get().register('client-a', reducer);
  }

  ngOnDestroy() {
    this.registryService.get().deregister('client-a');
  }
}
