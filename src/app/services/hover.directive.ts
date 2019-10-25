import { Directive, ElementRef, Input, HostListener } from '@angular/core';

// Please do NOT use directive hovering in production. We have CSS for that. It's just for the sake of an example.
@Directive({ selector: '[hover]' })
export class HoverDirective {
  @Input() hover: string;
  constructor(private el: ElementRef) { }

  @HostListener('mouseover')
  onMouseOver() {
    (this.el.nativeElement as HTMLElement).style.backgroundColor = this.hover;
  }

  @HostListener('mouseout')
  onMouseOut() {
    (this.el.nativeElement as HTMLElement).style.backgroundColor = 'white';
  }
}