import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { filter, mergeMap, take } from 'rxjs/operators';
import {setTodos} from '../actions/todo.actions';

@Component({
  selector: 'app-todo-list',
  template: `
    <p>
      todo-list works!
    </p>
  `,
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  constructor(private _http : HttpClient, private _store : Store<any>) { }

  ngOnInit() {

    // get request when there is nothing in the tasks
    this._store.pipe(
      filter((state) => state.todo.todo.tasks.length === 0),
      take(1),
      mergeMap(() => this._http.get('https://nztodo.herokuapp.com/api/task/?format=json'))
    ).subscribe((tasks : any) => {
      this._store.dispatch(setTodos({tasks}))
    })
  }

}
