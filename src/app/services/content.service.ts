import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";
import {Content} from "../helper-files/content-interface";
import {CONTENT} from "../helper-files/contentDb";

@Injectable({
  providedIn: 'root'
})
export class ContentService {

  constructor() { }

  // In this case we didn't get contents synchronously,
  // So, I named the function getContents, not getContentObs.
  getContents():Observable<Content[]>{
    return of(CONTENT);
  }
}
