import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-note-toggle-btn',
  templateUrl: './note-toggle-btn.component.html',
  styleUrls: ['./note-toggle-btn.component.css']
})
export class NoteToggleBtnComponent implements OnInit {
  @Input() text!: string;
  @Input() color!: string;
  @Output() btnToggleClick = new EventEmitter;
  constructor() { }

  ngOnInit(): void {
  }
  onClick(){
    this.btnToggleClick.emit();
  }
}
