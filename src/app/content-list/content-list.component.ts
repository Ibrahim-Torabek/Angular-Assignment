import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Content} from "../helper-files/content-interface";
import {ContentService} from "../services/content.service";

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ContentListComponent implements OnInit {

  contents: Content[];
  searchResult = ""
  result: Content | undefined


  constructor(private contentService: ContentService) {
    this.contents = [];

  }

  ngOnInit(): void {
    this.contentService.getContentObs().subscribe(contentList => this.contents = contentList);
  }

  searchTitle(title: string): void{

    // display error message if text field empty
    if(title == ""){
      this.searchResult = "<span class = 'error'>Input field cannot be empty</span>"
      return
    }

    // search title by includes, it can search any words in title. case insensitive.
    this.result = this.contents.find(e => {
      return e.title.toLocaleLowerCase().includes(title.toLowerCase())
      }
    )
    console.log(this.result)

    // if found display author and title
    if(this.result !== undefined)
      this.searchResult = `<span class = 'found'>Found!!! Author: ${this.result.author }, Title: ${this.result.title} </span>`;
    else
      this.searchResult = "<span class = 'not-found'>Not Found</span>"
  }


}
