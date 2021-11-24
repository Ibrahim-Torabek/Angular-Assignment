import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Content} from "../helper-files/content-interface";
import {MessageService} from "../services/message.service";
import {CreateComponentComponent} from "../create-component/create-component.component";
import {MatDialog} from "@angular/material/dialog";
import {MatSnackBar} from "@angular/material/snack-bar";



@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.scss']
})
export class ContentCardComponent implements OnInit {

  @Input() content: Content;
  @Output() selectedContent = new EventEmitter<Content>();

  constructor(public messageService: MessageService, public dialog: MatDialog, private snackBar: MatSnackBar) {
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
      let content = result as Content;
      if (result != '')
        this.snackBar.open(`${content.title} updated successfully`, 'Close');
    })
  }
}
