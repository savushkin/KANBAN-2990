import {Component, OnInit, SimpleChanges, Input, Output, EventEmitter, OnChanges} from '@angular/core';
import {Task} from "../../_model/task";
import {TaskService} from "../../_service/task.service";
import {Column} from "../../_model/column";

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
  providers: [
    TaskService
  ]
})
export class TaskComponent implements OnInit, OnChanges {
  @Input() task:Task = null;
  taskForEdit:Task = null;

  @Input() column:Column;
  @Input() columns:Column[];

  @Output() removeTaskEvent = new EventEmitter();

  constructor(private taskService : TaskService) {

  }

  ngOnChanges(changes: SimpleChanges): void {
    if(this.task && 'task' in changes) {
      this.taskService.one(this.task.id).subscribe(resp => {
        this.taskForEdit = JSON.parse(resp['_body']);
      })
    }
  }

  handleEditTaskEvent() {
    this.removeTaskEvent.emit();
  }

  removeTask(task) {
    if(confirm('Удалить задачу ' + this.task['title'])) {
      this.taskService.remove(this.task['id']).subscribe(resp => {
        this.removeTaskEvent.emit();
      });
    }
  }

  ngOnInit() {
  }

}
