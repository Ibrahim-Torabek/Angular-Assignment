import { Component, OnInit } from '@angular/core';
import {Content} from "../helper-files/content-interface";
import {ContentList} from "../helper-files/content-list";

@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.css']
})
export class ContentCardComponent implements OnInit {

  contents: ContentList = new ContentList;

  constructor() {
  }

  ngOnInit(): void {
    let content: Content;

    content = {id: 100, author: "Tom Chris", title: "Good to know", body:"This is the first element of contents"};
    this.contents.add(content);

    content = {id: 101, author: "Random Name", title: "You are lucky", body:"This is the second element of contents"};
    this.contents.add(content);

    content = {id: 102, author: "Brain Todler", title: "Who am I?", body:"This is the third element of contents", type: "Horror"};
    this.contents.add(content);

  }

}
