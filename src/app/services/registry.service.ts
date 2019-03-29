import { Injectable } from '@angular/core';
import { ReducerRegistry } from 'rdx-reducer-registry';

@Injectable({
  providedIn: 'root'
})
export class RegistryService {
    private registry: ReducerRegistry;
    get(): ReducerRegistry {
        return this.registry;
    }
    set(registry: ReducerRegistry) {
        this.registry = registry;
    }
}
