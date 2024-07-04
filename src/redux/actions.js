
import {
  FRUIT_SELECTED,
  COMMENT_CHANGED,
} from './actionType';

export const selectFruit = fruit => async dispatch => {
  try {
    dispatch({ type: FRUIT_SELECTED, payload: { fruit } });
  } catch (e) {
    console.log(e)
    // here we can dispatch another action or do something else
  }
};

export const changeComment = comment => async dispatch => {
  try {
    dispatch({ type: COMMENT_CHANGED, payload: { comment } });
  } catch (e) {
    console.log(e)
    // here we can dispatch another action or do something else
  }
};
