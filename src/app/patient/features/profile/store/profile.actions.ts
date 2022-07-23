import { createAction, props } from '@ngrx/store';

export const profileProfileActionss = createAction(
  '[ProfileActions] Profile ProfileActionss'
);

export const profileProfileActionssSuccess = createAction(
  '[ProfileActions] Profile ProfileActionss Success',
  props<{ data: any }>()
);

export const profileProfileActionssFailure = createAction(
  '[ProfileActions] Profile ProfileActionss Failure',
  props<{ error: any }>()
);
