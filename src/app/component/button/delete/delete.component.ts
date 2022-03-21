import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Task } from '../../tasks/Task';
@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {
  @Output() @Input() task!:Task;
  @Output() btnDeleteClick = new EventEmitter();
  emitTask?:Task;

  constructor() { }

  ngOnInit(): void {
  }
  deleteTask(emitTask: Task){
    this.btnDeleteClick.emit(emitTask);
  }
}
