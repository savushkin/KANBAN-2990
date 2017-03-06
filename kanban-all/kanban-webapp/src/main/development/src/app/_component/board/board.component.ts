import {Component, OnInit, Input, OnChanges, SimpleChanges} from "@angular/core";
import {Board} from "../../_model/board";
import {Column} from "../../_model/column";
import {ColumnService} from "../../_service/column.service";

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss'],
  providers: [
    ColumnService
  ]
})
export class BoardComponent implements OnInit, OnChanges {

  @Input() board:Board = new Board();
  columns:Column[];

  constructor(private columnService:ColumnService) {
    this.columnService = columnService;
  }

  ngOnInit() {

  }

  ngOnChanges(changes: SimpleChanges) {
    if(this.board && 'board' in changes) {
      this.columnService.getAllColumnsByBoard(this.board).subscribe(resp => {
        this.columns = JSON.parse(resp['_body'])['_embedded']['boardColumns'];
      })
    }
  }
}
