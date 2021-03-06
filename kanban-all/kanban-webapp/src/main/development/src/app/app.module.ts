import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { SortableModule } from 'ng2-bootstrap/sortable';

import { AppComponent } from './app.component';
import { NavbarComponent } from './_component/navbar/navbar.component';
import {HttpService} from "./_service/http.service";
import {KanbanUserService} from "./_service/kanban-user.service";
import { BoardComponent } from './_component/board/board.component';
import {BoardService} from "./_service/board.service";
import { ColumnComponent } from './_component/column/column.component';
import {ColumnService} from "./_service/column.service";
import { TaskComponent } from './_component/task/task.component';
import { BoardFormComponent } from './_component/board-form/board-form.component';
import { ColumnFormComponent } from './_component/column-form/column-form.component';
import { TaskFormComponent } from './_component/task-form/task-form.component';
import {TaskService} from "./_service/task.service";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BoardComponent,
    ColumnComponent,
    TaskComponent,
    BoardFormComponent,
    ColumnFormComponent,
    TaskFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,

    SortableModule.forRoot()
  ],
  providers: [
    HttpService,
    KanbanUserService,
    BoardService,
    ColumnService,
    TaskService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
