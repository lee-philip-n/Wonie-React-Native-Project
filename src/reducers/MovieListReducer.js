import { EXPAND_DESC } from '../actions/types';

export default (state = null, actions) => {
  switch (actions.type) {
    case EXPAND_DESC:
      return actions.payload;
    default:
      return state;
  }
}