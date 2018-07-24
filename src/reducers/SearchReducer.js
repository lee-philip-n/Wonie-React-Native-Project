import { UPDATE_MOVIE_SEARCH, SEARCH_MOVIE_SUCCESS, LOADING, SEARCH_ERROR } from '../actions/types';

const INITIAL_STATE = {
  movie: '',
  loading: false,
  searchedMovies: [],
  error: '',
};

export default (state = INITIAL_STATE, actions) => {
  switch (actions.type) {
    case UPDATE_MOVIE_SEARCH:
      return { ...state, movie: actions.payload };
    case LOADING:
      return { ...state, loading: true };
    case SEARCH_MOVIE_SUCCESS:
      return { ...state, ...INITIAL_STATE, searchedMovies: actions.payload };
    case SEARCH_ERROR:
      return { ...state, ...INITIAL_STATE, error: actions.payload };
    default:
      return state;
  }
};
