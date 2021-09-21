import {Content} from "./content-interface";


export class ContentList {
  private _contents: Content[];

  constructor() {
    this._contents = [];
  }

  add(content: Content): void {
    this._contents.push(content);
  }

  numberOfContents(): number {
    return this._contents.length;
  }

  content(index: number): string{
    let content = this.contents[index];
    let html: string;

    html = "ID: " + content.id;
    html += "<br>Author: " + content.author;
    html += "<br>Title: " + content.title;

    // Check if image and type is exist. add the information if exist.
    if (content.imgUrl != null)
      html += "<br><ing src='" + content.imgUrl + "'> "
    if (content.type != null)
      html += "<br>Type: " + content.type;

    html += "<br>body: " + content.body;

    return html;
  }

  get contents(): Array<Content> {
    return this._contents;
  }
}
