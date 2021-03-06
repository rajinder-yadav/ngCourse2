import { ActionReducer, Action } from '@ngrx/store';
import { INCREMENT_COUNTER, DECREMENT_COUNTER } from '../actions/counter-actions';

export const counterReducer: ActionReducer = (state = 0, action) => {
  
  switch (action.type) {
    case INCREMENT_COUNTER:
      return state + 1;
    case DECREMENT_COUNTER:
      return state - 1;
    default:
      return state;
  }
}
