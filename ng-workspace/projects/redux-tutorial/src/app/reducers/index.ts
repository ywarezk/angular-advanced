import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import {reducer as helloReducer, State as HelloState} from './hello.reducer';

export interface State {
  hello: HelloState
}

export const reducers: ActionReducerMap<State> = {
  hello: helloReducer
};


// export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
