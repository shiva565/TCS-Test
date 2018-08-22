import { Directive, ElementRef, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appSampleDirective]'
})
export class SampleDirectiveDirective {
  @HostBinding('class.class-txt') private isHovering: boolean;
  constructor( public el:ElementRef) {
    el.nativeElement.style.color = "red";
   }
  @HostListener('mouseover') onMouseOver(){
    // this.el.nativeElement.style.color="blue";
    this.isHovering = true;
  }
  @HostListener('mouseout') onMouseOut(){
    // this.el.nativeElement.style.color="green";
    this.isHovering = false;
  }
}
