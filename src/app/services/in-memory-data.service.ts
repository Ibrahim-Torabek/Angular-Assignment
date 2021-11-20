import { Injectable } from '@angular/core';
import {InMemoryDbService} from "angular-in-memory-web-api";
import {Content} from "../helper-files/content-interface";

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService{

  constructor() { }

  createDb() {

    const contents: Content[] = [
      {id: 100, author: "Tom Chris", title: "Good to know", body:"This is the first element of contents", imgUrl:"assets/first_person.jfif", type:"Novel", tags:["Horror","Comedy","Family"]},
      {id: 101, author: "Happy Boy", title: "Really?", body:"This is the Second element of contents",imgUrl:"assets/n2.jpeg", tags:["Good", "Bad"]},
      {id: 102, author: "Hello World", title: "I am there", body:"This is the third element of contents", imgUrl:"assets/n3.jpeg"},
      {id: 103, author: "Bad Boy", title: "Sing a Song", body:"This is the fourth element of contents", imgUrl:"assets/n4.jpeg"},
      {id: 104, author: "Eagles", title: "Not at all", body:"This is the fifth element of contents",imgUrl:"assets/o1.jpeg", type: "Novel"},
      {id: 105, author: "Fish Fly", title: "Short Life", body:"This is the sixth element of contents",imgUrl:"assets/o2.jpeg", type: "Poem"},
      {id: 106, author: "Feel Free", title: "Freedom", body:"This is the seventh element of contents", type: "Poem"},
      {id: 108, author: "Bat Man", title: "Are you rich?", body:"This is the ninth element of contents",imgUrl:"assets/o3.jpeg", type: "Poem"},
      {id: 107, author: "Super Man", title: "Why not?", body:"This is the eighth element of contents"},
      {id: 109, author: "Spider Man", title: "I believe I can fly", body:"This is the tenth element of contents", type: "Novel"}
    ];

    return { contents };
  }

  getID(content: Content[]): number {
    return content.length ? Math.max(...content.map(item => item.id ?? 0)) + 1: 0;
  }
}
