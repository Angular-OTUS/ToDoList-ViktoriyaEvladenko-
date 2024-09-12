import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { TodoItem } from '../../types/todo-item';

@Component({
  selector: 'app-to-do-list-item',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './to-do-list-item.component.html',
  styleUrl: './to-do-list-item.component.scss'
})
export class ToDoListItemComponent {
  @Input() item!: TodoItem;

  @Output() deleteTodoEvent = new EventEmitter();

  deleteTodo(id: number){
    this.deleteTodoEvent.emit(id)
  }
}
