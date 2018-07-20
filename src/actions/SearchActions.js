import axios from 'axios';
import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import { UPDATE_MOVIE_SEARCH, SEARCH_MOVIE, SEARCH_MOVIE_SUCCESS, LOADING, SEARCH_ERROR } from './types';
import { tmdbAPIKey } from '../../config';

export const updateMovieSearch = (movie) => {
  return {
    type: UPDATE_MOVIE_SEARCH,
    payload: movie,
  };
};

const loading = (dispatch) => {
  dispatch({ type: LOADING });
};

export const searchMovie = (movie) => {
  return (dispatch) => {
    loading(dispatch);
    axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${tmdbAPIKey.apiKey}&query=${movie}`)
      .then(response => {
        const results = response.data.results.slice();
        const filteredResults = [];
        
        for (let i = 0; i < results.length; i++) {
          if (results[i].poster_path) {
            filteredResults.push(results[i]);
          };
        };

        dispatch({ type: SEARCH_MOVIE_SUCCESS, payload: filteredResults })
      })
      .catch(error => 
        dispatch({ type: SEARCH_ERROR, payload: 'Search Failed' }))
  };
};