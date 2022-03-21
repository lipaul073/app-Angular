import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { Task } from './Task';
@Injectable({
  providedIn: 'root'
})
export class TasksService {
  delete(task: Task) {
    throw new Error('Method not implemented.');
  }

  private apiUrl:string='http://localhost:3200/tasks';

  constructor(private Http : HttpClient ) { }

  getTasks():Observable<Task[]>{
    return this.Http.get<Task[]>(this.apiUrl)
  }
  
  DeleteTasks(task:Task):Observable<Task[]>{
    return this.Http.delete<Task[]>(`${this.apiUrl}/${task.id}`)
  }

}
