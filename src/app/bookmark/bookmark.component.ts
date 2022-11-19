import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BookMark } from '../models/bookmark.model';

@Component({
  selector: 'app-bookmark',
  templateUrl: './bookmark.component.html',
  styleUrls: ['./bookmark.component.css'],
})
export class BookMarkComponent implements OnInit {
  @Input() bookmark: BookMark;
  @Input("bookmarks") bookmarks: any[] = [];
  @Output() onRemoveBookMark = new EventEmitter<number>();
  @Output() onEditBookMark = new EventEmitter<number>();
  isShowDivIf = false;
  constructor() {
    this.bookmark = {
      title:'',
      url:'',
      category: '',
      // profile:''
    };
  }

  ngOnInit(): void {
    console.log(this.bookmark);
  }

  deleteBookMarkClicked() {
    this.onRemoveBookMark.emit(this.bookmark.id);
  }

  editBookMarkClicked(){
    this.onEditBookMark.emit(this.bookmark.id);
  }
  toggleDisplayDivIf() {
    this.isShowDivIf = !this.isShowDivIf;
  }
}
