import { Component } from '@angular/core';
import { ClientsService } from 'src/app/services/clients.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  config: any;

  constructor(clients: ClientsService) {
    this.config = clients.getById('clientA');
  }
}
