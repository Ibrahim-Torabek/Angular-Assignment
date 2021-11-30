import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";
import {Content} from "../helper-files/content-interface";
import {CONTENT} from "../helper-files/contentDb";
import {MessageService} from "./message.service";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ContentService {
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-type': 'application/json'
    })
  };

  constructor(private messageService: MessageService, private http: HttpClient) { }


  getContents():Observable<Content[]>{
    return this.http.get<Content[]>("api/contents");
  }

  getContent(id: number): Observable<Content>{
    return this.http.get<Content>('api/contents/' + id);
  }

  addContent(content: Content): Observable<Content> {
    return this.http.post<Content>("api/contents", content, this.httpOptions);
  }

  updateContent(content: Content): Observable<any>{
    return this.http.put("api/contents", content, this.httpOptions);
  }
}
