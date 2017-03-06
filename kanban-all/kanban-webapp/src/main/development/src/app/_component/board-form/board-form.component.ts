import {Component, OnInit, Input, Output} from '@angular/core';
import {KanbanUser} from "../../_model/kanbanUser";
import {KanbanUserService} from "../../_service/kanban-user.service";
import {Board} from "../../_model/board";
import {BoardService} from "../../_service/board.service";
import {FormBuilder, Validators} from "@angular/forms";

@Component({
  selector: 'app-board-form',
  templateUrl: './board-form.component.html',
  styleUrls: ['./board-form.component.scss']
})
export class BoardFormComponent implements OnInit {
  kanbanUsers:KanbanUser[] = [];

  @Input() board:Board;

  boardForm = this.fb.group({
    name: ["", Validators.required],
    description: ["", Validators.required],
    owner: [KanbanUser, Validators.required],
  });

  constructor(private fb:FormBuilder,
              private kanbanUserService:KanbanUserService,
              private boardService:BoardService) {
    kanbanUserService.getPage(0, 9999).subscribe(resp => {
      this.kanbanUsers = JSON.parse(resp['_body'])['_embedded']['kanbanUsers'];
    })
  }

  ngOnInit() {
  }

  submit(event) {
    console.log(event);
    console.log(this.boardForm.value);
    console.log(JSON.stringify(this.boardForm.value));
    // const board:Board = new Board();
    //
    // board.boardUserPermissionSet = [];
    // board.name = this.board.name;
    // board.description = this.board.description;
    // board.owner = this.board.owner;
    //
    // console.log(board);

  }
}
