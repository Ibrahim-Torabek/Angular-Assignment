import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ContentService} from "../services/content.service";
import {CreateComponentComponent} from "../create-component/create-component.component";
import {Content} from "../helper-files/content-interface";
import {MatDialog} from "@angular/material/dialog";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Location} from "@angular/common";

@Component({
  selector: 'app-content-detail',
  templateUrl: './content-detail.component.html',
  styleUrls: ['./content-detail.component.css']
})
export class ContentDetailComponent implements OnInit {

  id = 0;
  content: any = {};
  error: any | undefined;

  constructor(
    private route: ActivatedRoute,
    private contentService: ContentService,
    public dialog: MatDialog,
    private snackBar: MatSnackBar,
    private location: Location
  ) {

  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(parameters => {
      this.id = Number(parameters.get('id'));

      this.contentService.getContent(this.id).subscribe(content =>{
        this.content = content;
        //console.log(content);
      }, error => {
        this.error = error;
        //console.log(error, this.content);

      });
    })
  }

  openCreateDialog() {
    const dialogRef = this.dialog.open(CreateComponentComponent, {data: this.content})

    dialogRef.afterClosed().subscribe(result => {

      // If clicked Cancel button, return
      if (result == '') {
        console.log("Empty result")
        return
      }
      // If clicked Create button
      let content = result as Content;
      this.contentService.updateContent(content).subscribe(content => {
        this.snackBar.open(`${this.content.title} updated successfully`,'Close');
      })
    })
  }

  goBack(): void {
    this.location.back();
  }
}
