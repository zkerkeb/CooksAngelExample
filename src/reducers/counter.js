import { COUNTER_INCREMENT, COUNTER_DECREMENT } from '../actions/counter';

const initialState = {
  counter: 0,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case COUNTER_INCREMENT:
      return {
        ...state,
        counter: state.counter + action.payload
      };
    case COUNTER_DECREMENT:
      return {
        ...state,
        counter: state.counter - action.payload
      };
    default:
      return state;
  }
};