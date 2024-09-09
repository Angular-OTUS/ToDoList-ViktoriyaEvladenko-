import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-to-do-list-item',
  standalone: true,
  imports: [],
  templateUrl: './to-do-list-item.component.html',
  styleUrl: './to-do-list-item.component.scss'
})
export class ToDoListItemComponent {
  @Input() item: any;

  @Output() deleteTodoEvent = new EventEmitter();

  deleteTodo(id: number){
    this.deleteTodoEvent.emit(id)
  }
}
