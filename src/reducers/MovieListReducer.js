import { FETCH_FAV } from '../actions/types';


const INITIAL_STATE = {};

export default (state = INITIAL_STATE, actions) => {
  switch (actions.type) {
    case FETCH_FAV:
      return actions.payload;
    default:
      return state;
  }
};
