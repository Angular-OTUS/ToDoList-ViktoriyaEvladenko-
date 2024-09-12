import { CommonModule, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ToDoListItemComponent } from '../to-do-list-item/to-do-list-item.component';
import { MatInputModule } from '@angular/material/input';
import { ButtonComponent } from '../button/button.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { PromptDirective } from '../../derictive/prompt.directive';

@Component({
  selector: 'app-to-do-list',
  standalone: true,
  imports: [CommonModule, FormsModule, ToDoListItemComponent, MatInputModule, ButtonComponent, MatProgressSpinnerModule, PromptDirective],
  templateUrl: './to-do-list.component.html',
  styleUrl: './to-do-list.component.scss'
})
export class ToDoListComponent {
  isLoading: boolean = true;

  ngOnInit(){
    setTimeout(()=> {
      this.isLoading = false;
    }, 500)
  }

  inputValue = '';
  descriptionValue = '';
  selectedItemId!: number;
  todoArray = [
    {
      id: 1,
      text: "Todo1",
      description: '',
    },
    {
      id: 2,
      text: "Todo2",
      description: '',
    },
    {
      id: 3,
      text: "Todo3",
      description: '',
    },
  ]


  deleteTodo(id: number){
    let newArray = this.todoArray.filter(item => item.id !== id );
    this.todoArray = [...newArray];
  }

  addTodo(){
    let maxId = Math.max(...this.todoArray.map(item => item.id), 0);
    let newTodo = {
      id: maxId + 1, 
      text: this.inputValue,
      description: this.descriptionValue,
    }
    this.todoArray = [...this.todoArray, newTodo];
    this.inputValue = '';
    this.descriptionValue = '';
  }

  selectIdItem(id: number): void{
    this.selectedItemId = id;
  }
 
  get getDescription(){
    let item = this.todoArray.find(item => item.id === this.selectedItemId);
    return item?.description === "" ? 'У задачи нет описания': item?.description;
  }
}
