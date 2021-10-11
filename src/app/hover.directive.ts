import {Directive, ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: '[appHover]'
})
export class HoverDirective {

  private elm: ElementRef;


  constructor(e: ElementRef) {
    this.elm = e;
  }

  ngOnInit(): void{

  }

  @HostListener('mouseenter') onMouseEnter(){

    this.elm.nativeElement.style.textDecoration = "underline";
    //console.log("Mouse Entered")
  }

  @HostListener('mouseleave') onMouseLeave(){
    this.elm.nativeElement.style.textDecoration = 'none';
  }

}
