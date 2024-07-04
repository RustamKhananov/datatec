import { FRUIT_SELECTED } from '../actionType';

const INITIAL_STATE = {
  selectedFruit: null
};

 const fruitsReducer = (state = INITIAL_STATE, action = {}) => {
  switch (action.type) {
    case FRUIT_SELECTED:
      return { ...state, selectedFruit: action.payload.fruit };
    default:
      return state;
  }
};

export default fruitsReducer
