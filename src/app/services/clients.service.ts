import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {

  private readonly collection = {
    clientA: {
      element: 'client-a',
      path:    'client-a/main.js',
      loaded:  false,
    },
    clientB: {
      element: 'client-b',
      path:    'client-b/main.js',
      loaded:  false,
    },
  }

  getById(id: string): any {
    return this.collection[id];
  }
}
