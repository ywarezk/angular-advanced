import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { reducers } from './reducers';
import { TodoListComponent } from './todo-list/todo-list.component';



@NgModule({
  declarations: [TodoListComponent],
  imports: [
    CommonModule,
    StoreModule.forFeature('todo', reducers)
  ]
})
export class TodoModule { }
