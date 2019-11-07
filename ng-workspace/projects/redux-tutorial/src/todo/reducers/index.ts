import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import {reducer, State as TodoState} from './todo.reducer';

export const todoFeatureKey = 'todo';

export interface State {
  todo: TodoState
}

export const reducers: ActionReducerMap<State> = {
  todo: reducer
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
