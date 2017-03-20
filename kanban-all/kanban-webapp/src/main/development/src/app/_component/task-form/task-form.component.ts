import {Component, OnInit, Input, OnChanges, SimpleChanges, Output, EventEmitter} from '@angular/core';
import {Board} from "../../_model/board";
import {KanbanUser} from "../../_model/kanbanUser";
import {Column} from "../../_model/column";
import {Validators, FormBuilder} from "@angular/forms";
import {BoardService} from "../../_service/board.service";
import {KanbanUserService} from "../../_service/kanban-user.service";
import {TaskService} from "../../_service/task.service";
import {Task} from "../../_model/task";
import {ColumnService} from "../../_service/column.service";

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.scss']
})
export class TaskFormComponent implements OnInit, OnChanges {
  kanbanUsers:KanbanUser[] = [];
  isActive:boolean = false;
  @Input() isNew:boolean = false;
  @Input() task:Task;
  @Input() board:Board;
  @Input() column:Column;
  @Input() columns:Column[];

  @Output() saveTaskEvent = new EventEmitter();


  taskForm = this.fb.group({
    title: [""],
    description: [""],
    owner: [1],
    taskUser: [1],
    column: [1]
  });

  constructor(private fb:FormBuilder,
              private kanbanUserService:KanbanUserService,
              private boardService:BoardService,
              private columnService:ColumnService,
              private taskService:TaskService) {
    kanbanUserService.getPage(0, 9999).subscribe(resp => {
      this.kanbanUsers = JSON.parse(resp['_body'])['_embedded']['kanbanUsers'].map(value => {
        delete value['_links'];
        return value;
      });
    })
  }

  toggleModalCreate() {
    this.isActive = !this.isActive;
  }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(this.column && 'column' in changes) {
      this.taskForm.controls['column'].setValue(this.column ? this.column['id'] : 0);
    }

    if(!this.isNew && (this.task && 'task' in changes)) {
      this.taskForm.controls['title'].setValue(this.task['title']);
      this.taskForm.controls['description'].setValue(this.task['description']);
      this.taskForm.controls['owner'].setValue(this.task['owner']['id']);
      this.taskForm.controls['taskUser'].setValue(this.task['taskUser'].map(value => {
        return value['id'];
      }));
      this.taskForm.controls['column'].setValue(this.task['boardColumn']['id']);
    }
  }

  submit(event) {
    const task:Task = new Task();

    if(!this.isNew)
      task.id = this.task.id;

    task.title = this.taskForm.value.title;
    task.description = this.taskForm.value.description;
    if(this.taskForm.value.column) {
      task.boardColumn = this.columns.filter((value, index, array) => {
        if(this.taskForm.value.column == value.id)
          return value;
      })[0];
    } else {
      task.boardColumn = this.column;
    }
    task.creationDate = new Date().getTime();
    task.estimatedTime = 0;
    task.spentTime = 0;
    if(this.taskForm.value.owner) {
      task.owner = this.kanbanUsers.filter((value, index, array) => {
        if(this.taskForm.value.owner == value.id)
          return value;
      })[0];
    }
    if(this.taskForm.value.taskUser) {
      task.taskUser = this.kanbanUsers.filter((value, index, array) => {
        if(this.taskForm.value.taskUser.indexOf(value.id) > -1)
          return value;
      });


      task.taskUser = task.taskUser.map(value => {
        return {
          task: {id:task.id},
          kanbanUser: value
        }
      });

      console.log(task.taskUser);
    }

    if(this.isNew) {
      this.taskService.create(task).subscribe(resp => {
        this.taskForm.reset();
        this.toggleModalCreate();
        this.saveTaskEvent.emit(task);
      });
    } else {
      this.taskService.update(task.id, task).subscribe(resp => {
        this.taskForm.reset();
        this.toggleModalCreate();
        this.saveTaskEvent.emit(task);
      });
    }
  }
}
