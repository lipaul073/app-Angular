import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Task } from '../tasks/Task';
import { TasksService } from '../tasks/tasks.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  @Input() tasks!: Task;
  @Output() deleteTask=new EventEmitter();
  constructor(private tasksService:TasksService) { }

  ngOnInit(): void {
  }

  btnDeleteClick(delTask:Task){
    this.deleteTask.emit(delTask);
  }
}
