import {Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appHover]'
})
export class HoverDirective {

  private elm: ElementRef;


  constructor(e: ElementRef) {
    this.elm = e;
  }

  @Input() isTag: any;

  @HostListener('mouseenter') onMouseEnter(){

    if(this.isTag == null)
      this.setUnderline();
    else
      this.boldFontWeight();

    //console.log("Mouse Entered")
  }

  @HostListener('mouseleave') onMouseLeave(){
    if(this.isTag == null)
      this.removeUnderline();
    else
      this.normalFontWeight();

  }

  setUnderline(){
    this.elm.nativeElement.style.textDecoration = "underline";
  }

  removeUnderline(){
    this.elm.nativeElement.style.textDecoration = 'none';
  }

  boldFontWeight(){
    this.elm.nativeElement.style.fontWeight = "bold";
  }

  normalFontWeight(){
    this.elm.nativeElement.style.fontWeight = "normal";
  }


}
