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
    owner: [1, Validators.required],
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
    this.kanbanUserService.one(this.boardForm.value.owner).subscribe(resp => {
      const owner = JSON.parse(resp['_body']);
      delete owner['_links'];

      const board:Board = new Board();
      board.boardUserPermissionSet = [];
      board.creation_date = new Date().getTime();
      board.name = this.boardForm.value.name;
      board.description = this.boardForm.value.description;
      board.owner = owner;

      this.boardService.create(board).subscribe(createResultResp => {
        console.log(createResultResp);
      })

    });
  }
}
