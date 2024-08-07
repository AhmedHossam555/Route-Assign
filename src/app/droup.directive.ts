import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appDroup]',
  standalone: true
})
export class DroupDirective {
  constructor(private eleref: ElementRef) { }
  @HostListener('click') onclick(event:Event){
    console.log(this.eleref.nativeElement.classList.toggle('isopen'))
  }
}
