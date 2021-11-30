import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ContentService} from "../services/content.service";

@Component({
  selector: 'app-content-detail',
  templateUrl: './content-detail.component.html',
  styleUrls: ['./content-detail.component.css']
})
export class ContentDetailComponent implements OnInit {

  id = 0;
  content: any = {};

  constructor(
    private route: ActivatedRoute,
    private contentService: ContentService
  ) {

  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(parameters => {
      this.id = Number(parameters.get('id'));

      this.contentService.getContent(this.id).subscribe(content =>{
        this.content = content;
        // console.log(content);
      });
    })
  }

}
