import {Component, OnInit, Input} from '@angular/core';
import {Board} from "../../_model/board";
import {FormBuilder, Validators} from "@angular/forms";
import {BoardService} from "../../_service/board.service";
import {ColumnService} from "../../_service/column.service";
import {Column} from "../../_model/column";

@Component({
  selector: 'app-column-form',
  templateUrl: './column-form.component.html',
  styleUrls: ['./column-form.component.scss']
})
export class ColumnFormComponent implements OnInit {
  boards:Board[] = [];

  @Input() column:Column;

  columnForm = this.fb.group({
    name: ["", Validators.required],
    description: ["", Validators.required],
    board: [1, Validators.required],
  });

  constructor(private fb:FormBuilder,
              private boardService:BoardService,
              private columnService:ColumnService) {
    boardService.getPage(0, 9999).subscribe(resp => {
      this.boards = JSON.parse(resp['_body'])['_embedded']['boards'];
    })
  }

  ngOnInit() {
  }

  submit(event) {
    this.columnService.one(this.columnForm.value.board).subscribe(resp => {
      const board:Board = JSON.parse(resp['_body']);
      delete board['_links'];

      const column:Column = new Column();
      column.name = this.columnForm.value.name;
      column.description = this.columnForm.value.description;
      column.board = board;

      this.columnService.create(column).subscribe(createResultResp => {
        // console.log(createResultResp);
      })

    });
  }
}
