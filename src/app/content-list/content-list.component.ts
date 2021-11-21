import {Component, OnInit, ViewEncapsulation, OnDestroy} from '@angular/core';
import {Content} from "../helper-files/content-interface";
import {ContentService} from "../services/content.service";
import {MessageService} from "../services/message.service";
import {BreakpointObserver, Breakpoints} from "@angular/cdk/layout";
import {takeUntil} from "rxjs/operators";
import {Subject} from "rxjs";
import {CreateComponentComponent} from "../create-component/create-component.component";
import {MatDialog} from "@angular/material/dialog";
import {FormControl, Validators} from '@angular/forms';
import {MatSnackBar} from "@angular/material/snack-bar";

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

  selectedContent: Content | undefined;

  // Change col number in a row by window size
  cols = '3';
  destroyed = new Subject<void>();
  displayNameMap = new Map([
    [Breakpoints.XSmall, '1'],
    [Breakpoints.Small, '2'],
    [Breakpoints.Medium, '3'],
    [Breakpoints.Large, '4'],
    [Breakpoints.XLarge, '5'],
  ]);

  constructor(
    private contentService: ContentService,
    public messageService: MessageService,
    public dialog: MatDialog,
    breakpointObserver: BreakpointObserver,
    private _snackBar: MatSnackBar
  ) {
    this.contents = [];

    breakpointObserver
      .observe([
        Breakpoints.XSmall,
        Breakpoints.Small,
        Breakpoints.Medium,
        Breakpoints.Large,
        Breakpoints.XLarge,
      ])
      .pipe(takeUntil(this.destroyed))
      .subscribe(result => {
        for (const query of Object.keys(result.breakpoints)) {
          if (result.breakpoints[query]) {
            this.cols = this.displayNameMap.get(query) ?? 'Unknown';
          }
        }
      });
  }

  ngOnInit(): void {
    this.getContents();
  }

  ngOnDestroy() {
    this.destroyed.next();
    this.destroyed.complete();
  }

  getContents(): void{
    this.contentService.getContents().subscribe(contents => {
      this.contents = contents
      //console.log(contents)
    });
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
    if(this.result !== undefined) {
      //this.searchResult = `<span class = 'found'>Found!!! Author: ${this.result.author}, Title: ${this.result.title} </span>`;
      this.messageService.add(`Found!!! Author: ${this.result.author}, Title: ${this.result.title}`)
    }
    else
      //this.searchResult = "<span class = 'not-found'>Not Found</span>"
      this.messageService.add(`Content NOT found`);

  }


  addContent(newContent: Content) {

    if (this.selectedContent) {
        this.contentService.updateContent(newContent).subscribe(content => {
          this.contents = [...this.contents];
          this.selectedContent = undefined;
        })
    } else {
      this.contentService.addContent(newContent).subscribe(content => {
        console.log(this.contents);
        this.contents.push(content);
        this.contents = [...this.contents];
      })
    }


  }


  selectContent(content: Content){
    this.selectedContent = content;
    console.log("Clicked: ", content);
    this.contents = [...this.contents];
  }


  openCreateDialog(){
    const dialogRef = this.dialog.open(CreateComponentComponent)

    dialogRef.afterClosed().subscribe(result => {
      // If clicked Cancel button, return
      if (result == '') {
        console.log("Empty result")
        return
      }
      // If clicked Create button
      let content = result as Content;
      this.contentService.addContent(content).subscribe(content => {
        console.log(this.contents);
        this.contents.push(content);
        this.contents = [...this.contents];
        this._snackBar.open(`Content Created`,'Close');
      })
    })
  }
}
