import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BookMark } from '../models/bookmark.model';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  @Input() bookmark: BookMark;
  @Output() onRemoveBookMark = new EventEmitter<number>();
  @Output() onEditBookMark = new EventEmitter<number>();

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

 
}
