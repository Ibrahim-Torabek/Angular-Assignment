import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";
import {Content} from "../helper-files/content-interface";
import {CONTENT} from "../helper-files/contentDb";

@Injectable({
  providedIn: 'root'
})
export class ContentService {

  constructor() { }

  getContentObs():Observable<Content[]>{
    return of(CONTENT);
  }
}
