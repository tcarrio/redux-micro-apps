import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { select } from '@angular-redux/store';
import reducer from './store';
import { RegistryService } from 'src/app/services/registry.service';

@Component({
  selector:    'client-a',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class AppComponent implements OnInit {

  @select(['client-a', 'userCount'])
  readonly userCount: Observable<number>;

  constructor(private registryService: RegistryService) { }

  ngOnInit() {
    this.registryService.get().register('client-a', reducer);
  }
}
