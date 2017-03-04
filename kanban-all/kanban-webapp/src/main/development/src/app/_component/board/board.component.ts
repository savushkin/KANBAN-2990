import {Component, OnInit, Input, OnChanges, SimpleChanges} from '@angular/core';
import {BoardService} from '../../_service/board.service';
import {Board} from "../../_model/board";

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss'],
  providers: [
    BoardService
  ]
})
export class BoardComponent implements OnInit, OnChanges {
  @Input() board:Board;

  constructor(private boardService: BoardService) {

  }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): any {
    if (this.board && 'board' in changes) {

    }
  }
}
