import { Action, createReducer, on } from '@ngrx/store';
import {setMessage} from '../actions/hello.actions';


export const helloFeatureKey = 'hello';

export interface State {
  message : string;
  foo: number[];
  stam: Object,
}

export const initialState: State = {
  message: 'initial message',
  foo: [],
  stam: {}
};

const helloReducer = createReducer(
  initialState,
  on(setMessage, function(state, action) {
    return {
      ...state,
      message: action.message,
      foo: [...state.foo, action.message]
    }
  }),
  
);

export function reducer(state: State | undefined, action: Action) {
  return helloReducer(state, action);
}
