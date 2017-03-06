import { Component } from '@angular/core';
import {KanbanUserService} from './_service/kanban-user.service';
import {KanbanUser} from './_model/kanbanUser';
import {BoardService} from './_service/board.service';
import {Board} from './_model/board';
import {BoardComponent} from "./_component/board/board.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [
    KanbanUserService,
    BoardService
  ]
})
export class AppComponent {
  boards:Board[];
  currentBoard:Board;

  constructor(private kanbanUserService:KanbanUserService, private boardService:BoardService) {
    boardService.getPage(0, 999).subscribe(resp => {
      this.boards = JSON.parse(resp['_body'])['_embedded']['boards'];
      this.currentBoard = this.boards[0]||null;
    });
  }

  handleNewBoard(board:Board) {
    this.currentBoard = board;
  }
}
