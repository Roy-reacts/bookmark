import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { BookMark } from './models/bookmark.model';
import { BookMarkService } from './services/bookmark.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, AfterViewInit {
  @ViewChild('fileInput') fileInput: any;
  @ViewChild('addBookMarkButton') addBookMarkButton: any;
  title = 'BookMark';

  bookmarkForm: FormGroup;

  bookmarks: BookMark[];
  bookmarksToDisplay: BookMark[];
  categoryOptions = [
    'Category A',
    'Category B',
    'Category C',
    'Category D',
    'Category E',
  ];

  constructor(
    private fb: FormBuilder,
    private bookmarkService: BookMarkService
  ) {
    this.bookmarkForm = fb.group({ url: ['', [Validators.required, Validators.pattern('(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?')]]});
    this.bookmarks = [];
    this.bookmarksToDisplay = this.bookmarks;
  }

  ngOnInit(): void {
    this.bookmarkForm = this.fb.group({
      title: this.fb.control(''),
      url: this.fb.control(''),
      category: this.fb.control('default'),
    });

    this.bookmarkService.getBookMarks().subscribe((res) => {
      for (let emp of res) {
        this.bookmarks.unshift(emp);
      }
      this.bookmarksToDisplay = this.bookmarks;
    });
  }

  ngAfterViewInit(): void {
    //this.buttontemp.nativeElement.click();
  }

  addBookMark() {
    let bookmark: BookMark = {
      title: this.Title.value,
      url: this.Url.value,
      category: this.categoryOptions[parseInt(this.Category.value)],
      // profile: this.fileInput.nativeElement.files[0]?.name,
    };
    this.bookmarkService.postBookMark(bookmark).subscribe((res) => {
      this.bookmarks.unshift(res);
      this.clearForm();
    });
  }

  removeBookMark(event: any) {
    this.bookmarks.forEach((val, index) => {
      if (val.id === parseInt(event)) {
        this.bookmarkService.deleteBookMark(event).subscribe((res) => {
          this.bookmarks.splice(index, 1);
        });
      }
    });
  }

  editBookMark(event: any) {
    this.bookmarks.forEach((val, ind) => {
      if (val.id === event) {
        this.setForm(val);
      }
    });
    this.removeBookMark(event);
    this.addBookMarkButton.nativeElement.click();
  }

  setForm(emp: BookMark) {
    this.Title.setValue(emp.title);
    this.Url.setValue(emp.url);


    let categoryIndex = 0;
    this.categoryOptions.forEach((val, index) => {
      if (val === emp.category) categoryIndex = index;
    });
    this.Category.setValue(categoryIndex);


    // this.fileInput.nativeElement.value = '';
  }

  searchBookMarks(event: any) {
    let filteredBookMarks: BookMark[] = [];

    if (event === '') {
      this.bookmarksToDisplay = this.bookmarks;
    } else {
      filteredBookMarks = this.bookmarks.filter((val, index) => {
        let targetKey = val.title.toLowerCase() + '' + val.category.toLowerCase();
        let searchKey = event.toLowerCase();
        return targetKey.includes(searchKey);
      });
      this.bookmarksToDisplay = filteredBookMarks;
    }
  }

  clearForm() {
    this.Title.setValue('');
    this.Url.setValue('');
    this.Category.setValue('');
    // this.fileInput.nativeElement.value = '';
  }

  public get Title(): FormControl {
    return this.bookmarkForm.get('title') as FormControl;
  }
  public get Url(): FormControl {
    return this.bookmarkForm.get('url') as FormControl;
  }
  public get Category(): FormControl {
    return this.bookmarkForm.get('category') as FormControl;
  }
  get m(){
    return this.bookmarkForm.controls;
  }
}
