import {
  COMMENT_CHANGED
} from '../actionType';

const INITIAL_STATE = {
  comment: ''
};

 const commentsReducer = (state = INITIAL_STATE, action = {}) => {
  switch (action.type) {
    case COMMENT_CHANGED:
      return { ...state, comment: action.payload.comment };
    default:
      return state;
  }
};

export default commentsReducer
