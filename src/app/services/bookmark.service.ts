import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BookMark} from '../models/bookmark.model';

@Injectable({
  providedIn: 'root',
})
export class BookMarkService {
  baseUrl = 'http://localhost:3000/posts';

  constructor(private http: HttpClient) {}

  getBookMarks() {
    return this.http.get<BookMark[]>(this.baseUrl);
  }

  postBookMark(bookmark: BookMark) {
    return this.http.post<BookMark>(this.baseUrl, bookmark);
  }

  deleteBookMark(id: string) {
    return this.http.delete(this.baseUrl + '/' + id);
  }
}
