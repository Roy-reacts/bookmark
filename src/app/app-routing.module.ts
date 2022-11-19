import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { BookMarkComponent } from './bookmark/bookmark.component';

const routes: Routes = [{
  path: '',
  component: AppComponent,
  children: [
    {path: 'bookmark/details', component: BookMarkComponent, },]
    }]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
