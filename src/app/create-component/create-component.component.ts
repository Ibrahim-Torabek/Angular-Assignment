import {Component, EventEmitter, Inject, inject, Input, OnInit, Output} from '@angular/core';
import {Content} from "../helper-files/content-interface";
import {MessageService} from "../services/message.service";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {FormControl, Validators} from "@angular/forms";


@Component({
  selector: 'app-create-component',
  templateUrl: './create-component.component.html',
  styleUrls: ['./create-component.component.css']
})
export class CreateComponentComponent implements OnInit {

  @Input() selectedContent: Content | undefined;
  @Output() newContentEvent = new EventEmitter<Content>();

  //content: Content;

  required = new FormControl('',[Validators.required]);
  required1 = new FormControl('',[Validators.required]);
  required2 = new FormControl('',[Validators.required]);
  required3 = new FormControl('',[Validators.required]);


  tags: string;
  message = "";


  constructor(
    private messageService: MessageService,
    public matDialogRef: MatDialogRef<CreateComponentComponent>,
    @Inject(MAT_DIALOG_DATA) public content: Content
  ) {
    if (content != null){
      console.log(`Content: ${content.title}`);
    } else {
      this.content = {title: '', author: '', body: '', type: ''}
    }

    // if (this.selectedContent){
    //   this.content = this.selectedContent;
    //   console.log("Selected :")
    // } else {
    //   this.content = {title: '', author: '', body: '', type: ''}
    // }
     this.tags = '';
  }

  ngOnInit(): void {
    // if (this.selectedContent){
    //   this.content = this.selectedContent;
    //   console.log("Selected ....")
    // } else {
    //   this.content = {title: '', author: '', body: '', type: ''}
    // }
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

        // Get tags as string then split it into tags array.
        console.log("Type: ",this.content.type)
        if (this.tags){
          this.content.tags = this.tags.split(' ').filter( item => {
            return item;
          });
          console.log(this.content.tags);
        }

        success(this.content.title + " created/updated successfully");
        this.newContentEvent.emit(this.content);
        console.log(this.content);


        //Clear the input fields
        this.content = {title: '', author: '', body: ''};
        this.tags = '';
      }
    })

    newContentPromise.then(success => {
      this.messageService.add(`${success}`);

    })
      .catch(fail => {
        this.messageService.add(`${fail}`)
      })
  }

}
