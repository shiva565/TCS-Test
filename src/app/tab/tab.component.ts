import { Component, OnInit,ContentChild,ContentChildren,QueryList } from '@angular/core';
import { PaneDirective } from '../pane.directive';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.css']
})
export class TabComponent implements OnInit {
 // @ContentChild(PaneDirective) pane:PaneDirective;
 @ContentChildren(PaneDirective) paneList:QueryList<PaneDirective>;
  constructor() { }

  ngOnInit() {
  }
  get serailazePans():string{
    console.log(this.paneList);
    return this.paneList? this.paneList.map(p=> p.name+p.id).join(','):'';
  }
}
