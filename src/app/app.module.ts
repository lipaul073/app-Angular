import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NoteToggleBtnComponent } from './component/button/note-toggle-btn/note-toggle-btn.component';
import { SaveTaskBtnComponent } from './component/button/save-task-btn/save-task-btn.component';
import { TaskComponent } from './component/task/task.component';
import { TasksComponent } from './component/tasks/tasks.component';
import { HeaderComponent } from './layout/header/header.component';
import { ListComponent } from './layout/list/list.component';
import { FooterComponent } from './layout/footer/footer.component';
import { TasksListComponent } from './layout/tasks-list/tasks-list.component';
import { HttpClientModule } from '@angular/common/http';
import { DeleteComponent } from './component/button/delete/delete.component';

@NgModule({
  declarations: [
    AppComponent,
    NoteToggleBtnComponent,
    SaveTaskBtnComponent,
    TaskComponent,
    TasksComponent,
    HeaderComponent,
    ListComponent,
    FooterComponent,
    TasksListComponent,
    DeleteComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
