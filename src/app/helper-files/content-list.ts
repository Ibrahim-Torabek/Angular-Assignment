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
    let content = this._contents[index];
    let html: string;

    if(index > this._contents.length - 1)
      return "<span style='background-color: #1976d2'>Error: Requested content out of the list...</span>"


    html = "<strong>ID:</strong> " + content.id;
    html += "<br><strong>Author:</strong> <i>" + content.author + "</i>";
    html += "<br><strong>Title:</strong> " + content.title;

    // Check if image and type is exist. add the information if exist.
    if (content.imgUrl != null)
      html += "<br><ing src='" + content.imgUrl + "'> "
    if (content.type != null)
      html += "<br><strong>Type:</strong> " + content.type;

    html += "<br><strong>body:</strong> " + content.body;

    return html;
  }

  get contents(): Array<Content> {
    return this._contents;
  }
}
