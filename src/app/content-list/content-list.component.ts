import { Component, OnInit } from '@angular/core';
import {Content} from "../helper-files/content-interface";

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.css']
})
export class ContentListComponent implements OnInit {

  contents: Content[];


  constructor() {
    this.contents = [];

  }

  ngOnInit(): void {
    this.contents.push({
      id: 100,
      author: "Tom Chris",
      title: "Good to know",
      body:"This is the first element of contents",
      imgUrl:"assets/first_person.jfif",
      type:"Novel",
      tags:["Horror","Comedy","Family"]
    });
    this.contents.push({id: 101, author: "Happy Boy", title: "Really?", body:"This is the Second element of contents", tags:["Good", "Bad"]});
    this.contents.push({id: 102, author: "Hello World", title: "I am there", body:"This is the third element of contents"});
    this.contents.push({id: 103, author: "Bad Boy", title: "Sing a Song", body:"This is the fourth element of contents"});
    this.contents.push({id: 104, author: "Eagles", title: "Not at all", body:"This is the fifth element of contents",imgUrl:"assets/images.jfif", type: "Novel"});
    this.contents.push({id: 105, author: "Fish Fly", title: "Short Life", body:"This is the sixth element of contents",imgUrl:"assets/person-sitting-solo-preview.jpg", type: "Poem"});
    this.contents.push({id: 106, author: "Feel Free", title: "Freedom", body:"This is the seventh element of contents", type: "Poem"});
    this.contents.push({id: 107, author: "Super Man", title: "Why not?", body:"This is the eighth element of contents"});
    this.contents.push({id: 108, author: "Bat Man", title: "Are you rich?", body:"This is the ninth element of contents",imgUrl:"assets/people-green-girl-person-preview.jpg", type: "Poem"});
    this.contents.push({id: 109, author: "Spider Man", title: "I believe I can fly", body:"This is the tenth element of contents", type: "Novel"});

  }


}
