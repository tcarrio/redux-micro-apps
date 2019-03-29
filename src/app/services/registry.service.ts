import { Injectable } from '@angular/core';
import { ReducerRegistry } from 'rdx-reducer-registry';

@Injectable({
  providedIn: 'root'
})
export class RegistryService {
  private _registry: ReducerRegistry;

  get(): ReducerRegistry {
    return this._registry;
  }

  set(registry: ReducerRegistry) {
    this._registry = registry;
  }
}
