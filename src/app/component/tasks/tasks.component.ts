import { Component, OnInit } from '@angular/core';
import { Task } from './Task';
import { TasksService } from './tasks.service';
@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  tasks:Task[]=[];

  constructor(private tasksService:TasksService) { }

  ngOnInit(): void {
    this.tasksService.getTasks().subscribe((task)=>this.tasks=task);
  }
  btnDeleteClick(emitTask:Task){
    this.tasksService
      .DeleteTasks(emitTask)
        .subscribe(
          ()=>(this.tasks = 
            this.tasks.filter((t)=>t.id!==emitTask.id))
    );
  }
  
}
