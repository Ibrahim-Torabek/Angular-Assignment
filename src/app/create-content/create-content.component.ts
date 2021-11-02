import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Content} from "../helper-files/content-interface";


@Component({
  selector: 'app-create-content',
  templateUrl: './create-content.component.html',
  styleUrls: ['./create-content.component.css']
})
export class CreateContentComponent implements OnInit {

  public message: unknown;
  // @ts-ignore
  @Input() length: number | undefined;
  @Output() newContentEvent = new EventEmitter<Content>();


  content: Content;
  savedContent: Content | undefined;
  tags: string;

  constructor() {
    this.content = {id: 0, title: '', author: '', body: ''}
    this.tags = '';
  }

  ngOnInit(): void {
  }


  createContent(){

    let newContentPromise = new Promise((success, fail) => {

      if(!this.content.author){
        fail("Author field must NOT be empty");
      } else  if (!this.content.title){
        fail("Title field must NOT be empty");
      } else if(!this.content.body){
        fail("Body field must NOT be empty");
      } else {
        // The id of the first element is 100.
        this.content.id = 100 + length;

        // Get tags as string then split it into tags array.
        if (this.tags){
          this.content.tags = this.tags.split(' ');
          console.log(this.content.tags);
        }

        this.savedContent = this.content;
        success(this.content.title + " created successfully at index of " + this.length);

        //Clear the input fields
        this.content = {id: 0, title: '', author: '', body: ''};
        this.tags = '';
      }

    });

    newContentPromise
      .then(successResult => {
        this.message = '';
        console.log(successResult)
        this.newContentEvent.emit(this.savedContent);

      } )
      .catch(failResult => { this.message = failResult});

  }
}
