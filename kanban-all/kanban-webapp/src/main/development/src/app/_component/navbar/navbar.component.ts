import {Component, OnInit, Input, OnChanges, SimpleChanges, EventEmitter, Output} from '@angular/core';
import {Board} from "../../_model/board";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, OnChanges {
  title:string = 'KanBan 2990';
  @Input() boards:Board[] = null;
  @Output() newBoardEvent = new EventEmitter();

  isShowBoardDropDown:boolean = false;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): any {
    if (this.boards && 'boards' in changes) {

    }
  }

  toggleBoardDropDown(event) {
    this.isShowBoardDropDown = !this.isShowBoardDropDown;
  }

  setBoard(board:Board) {
    this.newBoardEvent.emit(board);
  }
}
