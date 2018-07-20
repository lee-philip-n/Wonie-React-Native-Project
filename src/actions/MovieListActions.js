import { EXPAND_DESC } from './types';

export const expandDescription = (id) => {
  return {
    type: EXPAND_DESC,
    payload: id,
  }
}
