import { combineReducers } from 'redux';
import SearchReducer from './SearchReducer';
import MovieListReducer from './MovieListReducer';
import AuthReducer from './AuthReducer';

export default combineReducers({
  searchField: SearchReducer,
  movieListField: MovieListReducer,
  auth: AuthReducer,
});

