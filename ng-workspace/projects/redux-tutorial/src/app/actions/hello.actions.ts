import { createAction, props } from '@ngrx/store';

export const setMessage = createAction(
  '[Hello] Set Message',
  props<{message: string}>()
);





