import { Action, createReducer, on } from '@ngrx/store';
import {setTodos} from '../actions/todo.actions';


export const todoFeatureKey = 'todo';

export interface State {
  tasks: any[]
}

export const initialState: State = {
  tasks: []
};

const todoReducer = createReducer(
  initialState,
  on(setTodos, (state, action) =>({...state, tasks: action.tasks}) )
);

export function reducer(state: State | undefined, action: Action) {
  return todoReducer(state, action);
}
