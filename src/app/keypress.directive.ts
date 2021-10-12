import {Directive, ElementRef, HostListener} from '@angular/core';
import {ContentListComponent} from "./content-list/content-list.component";

@Directive({
  selector: '[appKeypress]'
})
export class KeypressDirective {

  constructor(private elm: ElementRef) { }

  @HostListener('document:keypress', ['$event']) onKeyPress(event: KeyboardEvent){
    console.log(this.elm.nativeElement.value);


  }

}
