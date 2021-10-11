import {Directive, ElementRef, Input, HostListener} from '@angular/core';

@Directive({
  selector: '[appBorder]'
})
export class BorderDirective {
  @Input() isFirst = false;
  @Input() isLast = false;

  private oldStyle: any;

  constructor(private elm: ElementRef) {

  }

  @HostListener("mouseenter") onMouseEnter(){
    if(this.isFirst || this.isLast){
      this.oldStyle = this.elm.nativeElement.children[0].style.border;
      // table which needs to change border is the first child of App-Content-Card element.
      this.elm.nativeElement.children[0].style.border = "solid 5px";
      //console.log(this.elm.nativeElement.children[0]);
    }
  }

  @HostListener("mouseleave") onMouseLeave(){
    if(this.isFirst || this.isLast){
      this.elm.nativeElement.children[0].style.border = this.oldStyle;

    }
  }


}
