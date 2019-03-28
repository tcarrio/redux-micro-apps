import { Component } from '@angular/core';
import { ClientsService } from 'src/app/services/clients.service';

@Component({
  selector: 'app-client-routing',
  templateUrl: './client-routing.component.html',
  styleUrls: ['./client-routing.component.css']
})
export class ClientRoutingComponent {

  config: any;

  constructor(clients: ClientsService) {
    this.config = clients.getById('clientB');
  }
}
