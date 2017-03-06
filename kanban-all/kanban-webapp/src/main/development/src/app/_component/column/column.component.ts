import {Component, OnInit, Input, SimpleChanges} from '@angular/core';
import {Column} from "../../_model/column";
import {TaskService} from "../../_service/task.service";
import {Task} from "../../_model/task";

@Component({
  selector: 'app-column',
  templateUrl: './column.component.html',
  styleUrls: ['./column.component.scss'],
  providers: [
    TaskService
  ]
})
export class ColumnComponent implements OnInit {
  @Input() column:Column = null;
  tasks:Task[] = null;

  constructor(private taskService:TaskService) {
    this.taskService = taskService;
  }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    if(this.column && 'column' in changes) {
      this.taskService.getAllByColumn(this.column).subscribe(resp => {
        this.tasks = JSON.parse(resp['_body'])['_embedded']['tasks'];
      })
    }
  }
}
