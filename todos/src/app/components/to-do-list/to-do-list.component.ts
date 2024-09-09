import { Component } from '@angular/core';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-to-do-list',
  standalone: true,
  imports: [MatProgressSpinnerModule, ButtonComponent],
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
}
