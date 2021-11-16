import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Content} from "../helper-files/content-interface";
import {MessageService} from "../services/message.service";



@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.css']
})
export class ContentCardComponent implements OnInit {

  @Input() content: Content;
  @Output() selectedContent = new EventEmitter<Content>();

  constructor(public messageService: MessageService) {
    this.content = {author: "", body: "", id: 0, title: ""};
  }

  ngOnInit(): void {

  }

  showId(){
    console.log(this.content.id);
    this.messageService.add(`Content ID: ${ this.content.id }`)
    this.selectedContent.emit(this.content);
    this.content = this.content;
  }

}
