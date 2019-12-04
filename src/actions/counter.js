import axios from 'axios';

export const COUNTER_INCREMENT = 'COUNTER_INCREMENT';
export const COUNTER_DECREMENT = 'COUNTER_DECREMENT';

export const counterIncrement = addValue => ({
  type: COUNTER_INCREMENT,
  payload: addValue
});

export const counterDecrement = subValue => ({
  type: COUNTER_DECREMENT,
  payload: subValue
});