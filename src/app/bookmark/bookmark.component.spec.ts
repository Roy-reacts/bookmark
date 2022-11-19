import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookMarkComponent } from './bookmark.component';

describe('BookMarkComponent', () => {
  let component: BookMarkComponent;
  let fixture: ComponentFixture<BookMarkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookMarkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookMarkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
