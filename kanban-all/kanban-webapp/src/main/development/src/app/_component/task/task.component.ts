import {Component, OnInit, SimpleChanges, Input} from '@angular/core';
import {Task} from "../../_model/task";

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {
  @Input() task:Task = null;

  constructor() { }

  ngOnInit() {
  }

}
