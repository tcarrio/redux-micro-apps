import { Component, OnInit, Input, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { StateService } from '../../services/state.service';

@Component({
  selector: 'widget-container',
  templateUrl: './widget-container.component.html',
  styleUrls: ['./widget-container.component.css']
})
export class WidgetContainerComponent implements AfterViewInit {

  @Input() config: any = {};
  @ViewChild('container') container: ElementRef;

  constructor(private stateService: StateService) { }

  ngAfterViewInit() {
    this.load(this.config);
  }

  load(name: string): void {
    const configItem = this.config;
    if (configItem.loaded) return;

    const content = this.container.nativeElement;
    const script  = document.createElement('script');
    script.src = configItem.path;
    content.appendChild(script);

    const element: HTMLElement = document.createElement(configItem.element);
    content.appendChild(element);

    element.addEventListener('message', msg => this.handleMessage(msg));
    element.setAttribute('state', 'init');

    script.onerror = () => console.error(`error loading ${configItem.path}`);
    this.stateService.registerClient(element);
  }

  handleMessage(msg: any): void {
    console.debug('shell received message: ', msg.detail);
  }
}
