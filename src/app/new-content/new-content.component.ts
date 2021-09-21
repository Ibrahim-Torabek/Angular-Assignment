import {Component, Input, OnInit} from '@angular/core';
import {Content} from "../helper-files/content-interface";
import {ContentList} from "../helper-files/content-list";

@Component({
  selector: 'app-new-content',
  templateUrl: './new-content.component.html',
  styleUrls: ['./new-content.component.css']
})
export class NewContentComponent implements OnInit {

  heading = "<h1>In Class Exercise: Week 03 </h1>"

  contents: ContentList = new ContentList;

  @Input() title: any;
  @Input() content: any;
  public aa: Content | undefined;
  constructor() { }

  ngOnInit(): void {
    let item: Content;

    item = {id: 200, author: "Ibrahim", title: "My way", body: "This is my first article about the class exercise... I am wondering if I can study Angular very well."};

    this.contents.add(item);

  }

}
