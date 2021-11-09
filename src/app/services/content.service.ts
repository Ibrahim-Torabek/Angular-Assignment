import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";
import {Content} from "../helper-files/content-interface";
import {CONTENT} from "../helper-files/contentDb";
import {MessageService} from "./message.service";

@Injectable({
  providedIn: 'root'
})
export class ContentService {

  constructor(private messageService: MessageService) { }

  // In this case we didn't get contents synchronously,
  // So, I named the function getContents, not getContentObs.
  getContents():Observable<Content[]>{
    this.messageService.add("Contents retrieved successfully!")

    return of(CONTENT);
  }
}
