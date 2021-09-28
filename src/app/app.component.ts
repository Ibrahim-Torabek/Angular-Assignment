import {Component, OnInit} from '@angular/core';
import {ContentList} from "./helper-files/content-list";
import {Content} from "./helper-files/content-interface";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  title = 'Angular Assignments';

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

    this.title = this.contents.contents[0].author;
    console.log(this.contents.contents[0].id);

  }

  showMyName(){

  }
}
