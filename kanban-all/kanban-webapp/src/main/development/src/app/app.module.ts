import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { SortableModule } from 'ng2-bootstrap/sortable';

import { AppComponent } from './app.component';
import { NavbarComponent } from './_component/navbar/navbar.component';
import {HttpService} from "./_service/http.service";
import {KanbanUserService} from "./_service/kanban-user.service";
import { BoardComponent } from './_component/board/board.component';
import {BoardService} from "./_service/board.service";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BoardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,

    SortableModule.forRoot()
  ],
  providers: [
    HttpService,
    KanbanUserService,
    BoardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
