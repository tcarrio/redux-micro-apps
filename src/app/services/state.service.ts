import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class StateService {

  private state$ = new Subject();
  private clients: HTMLElement[] = [];

  registerClient(client: HTMLElement) {
    this.clients.push(client);
  }

  setState(state: string) {
    for (let client of this.clients) {
      client.setAttribute('state', state);
    }
  }
}
