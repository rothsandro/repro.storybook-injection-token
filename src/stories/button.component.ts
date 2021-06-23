import { Component, Input, Output, EventEmitter, InjectionToken, Inject } from '@angular/core';
import { DEMO_ONE, DEMO_TWO } from './tokens';

@Component({
  selector: 'storybook-button',
  template: ` 
    <div>
      DEMO_ONE: {{ demoOne }}
    </div>
    <div>
      DEMO_TWO: {{ demoTwo }}
    </div>
  `,
  styleUrls: ['./button.css'],
})
export default class ButtonComponent {
  constructor(
    @Inject(DEMO_ONE) public demoOne: any,
    @Inject(DEMO_TWO) public demoTwo: any,
  ) {}
}
