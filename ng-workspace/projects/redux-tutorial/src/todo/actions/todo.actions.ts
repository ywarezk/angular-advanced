import { createAction, props } from '@ngrx/store';

export const setTodos = createAction(
  '[Todo] Set Todos',
  props<{tasks: any[]}>()
);




