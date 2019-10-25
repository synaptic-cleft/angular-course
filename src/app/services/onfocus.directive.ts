import {Directive, ElementRef, Input} from '@angular/core';

@Directive({ selector: '[focusOn]'})
export class FocusOnDirective {
  constructor(private el: ElementRef){}

  @Input() set focusOn(condition: boolean) {
    if (condition) {
      this.el.nativeElement.focus();
    }
  }
}