import { Directive, ElementRef, HostListener, Renderer2  } from '@angular/core';

@Directive({
  selector: '[myHighlight]',
  standalone: true
})
export class HighlightDirective {

  

  constructor(private el:ElementRef,private renderer: Renderer2) { }

  @HostListener('mouseenter') onMouseEnter(){
    this.el.nativeElement.classList.add("highlight-color");
    // this.renderer.setStyle(this.el.nativeElement, 'background-color', '#F0F0F0');
  }

  @HostListener('mouseleave') onMouseLeave(){
    this.el.nativeElement.classList.remove("highlight-color");
    // this.renderer.setStyle(this.el.nativeElement, 'background-color', '');
  }

}
