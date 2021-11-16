import { Pipe, PipeTransform } from '@angular/core';
import {Content} from "./helper-files/content-interface";

@Pipe({
  name: 'contentType'
})
export class ContentTypePipe implements PipeTransform {

  transform(contentList: Content[], filter: string): Content[] {
    // if filter is empty, return untyped contents
    //console.log("Filter: ", filter);
    if(!filter){
      return contentList.filter(c => c.type ? null : c);
    }
    return contentList.filter(c => {
      return c.type == filter ? c : null
    });
  }


}
