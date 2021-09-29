import { Pipe, PipeTransform } from '@angular/core';
import {Content} from "./helper-files/content-interface";

@Pipe({
  name: 'contentType'
})
export class ContentTypePipe implements PipeTransform {

  transform(contentList: Content[], filter: string): Content[] {
    // if filter is empty, return untyped contents
    if(!filter){
      return contentList.filter(c => c.type == null ? c : null);
    }
    return contentList.filter(c => c.type == filter ? c : null);
  }


}
