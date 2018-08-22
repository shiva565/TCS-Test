import { Directive, Input } from '@angular/core';

@Directive({
  selector: 'pane'
})
export class PaneDirective {
  @Input() id:string;
  @Input() name:string;
  constructor() { }

}
