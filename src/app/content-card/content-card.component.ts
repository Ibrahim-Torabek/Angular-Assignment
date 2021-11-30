import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Content} from "../helper-files/content-interface";
import {MessageService} from "../services/message.service";
import {CreateComponentComponent} from "../create-component/create-component.component";
import {MatDialog} from "@angular/material/dialog";
import {MatSnackBar} from "@angular/material/snack-bar";
import {ContentService} from "../services/content.service";



@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.scss']
})
export class ContentCardComponent implements OnInit {

  @Input() content: Content;
  @Output() selectedContent = new EventEmitter<Content>();

  constructor(
    public messageService: MessageService,
    public dialog: MatDialog,
    private snackBar: MatSnackBar,
    private contentService: ContentService) {
    this.content = {author: "", body: "", id: 0, title: ""};
  }

  ngOnInit(): void {

  }

  showId(){
    console.log(this.content.id);
    // this.messageService.add(`Selected ${this.content.author} to Update`)
    // this.selectedContent.emit(this.content);
    // this.content = this.content;
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
}
