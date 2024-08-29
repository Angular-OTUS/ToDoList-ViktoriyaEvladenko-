import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ToDoListItemComponent } from '../to-do-list-item/to-do-list-item.component';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-to-do-list',
  standalone: true,
  imports: [NgFor, FormsModule, ToDoListItemComponent, MatInputModule],
  templateUrl: './to-do-list.component.html',
  styleUrl: './to-do-list.component.scss'
})
export class ToDoListComponent {

  inputValue = '';
  todoArray = [
    {
      id: 1,
      text: "Todo1"
    },
    {
      id: 2,
      text: "Todo2"
    },
    {
      id: 3,
      text: "Todo3"
    },
  ]


  deleteTodo(id: number){
    let newArray = this.todoArray.filter(item => item.id !== id );
    this.todoArray = [...newArray];
  }

  addTodo(){
    let maxId = Math.max(...this.todoArray.map(item => item.id), 0);
    let newTodo = {id: maxId + 1, text: this.inputValue}
    this.todoArray = [...this.todoArray, newTodo];
    this.inputValue = '';
  }
}
