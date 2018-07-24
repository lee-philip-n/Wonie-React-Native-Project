import axios from 'axios';
import { UPDATE_MOVIE_SEARCH, SEARCH_MOVIE_SUCCESS, LOADING, SEARCH_ERROR } from './types';
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

export const homepageMovie = () => {
  const todayDate = new Date();
  const today = todayDate.getFullYear() + '-' + (todayDate.getMonth() + 1) + '-' + todayDate.getDate();
  const oneMonthAgo = (todayDate.getMonth() === 0 ? todayDate.getFullYear() - 1 : todayDate.getFullYear()) + '-' + (todayDate.getMonth() === 0 ? todayDate.getMonth() + 12 : todayDate.getMonth()) + '-' + todayDate.getDate();
  return (dispatch) => {
    axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${tmdbAPIKey.apiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&primary_release_date.gte=${oneMonthAgo}&primary_release_date.lte=${today}`)
      .then((response) => {
        dispatch({ type: SEARCH_MOVIE_SUCCESS, payload: response.data.results });
      });
  };
};

export const searchMovie = (movie) => {
  return (dispatch) => {
    loading(dispatch);
    axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${tmdbAPIKey.apiKey}&query=${movie}`)
      .then((response) => {
        const results = response.data.results.slice();
        const filteredResults = [];

        for (let i = 0; i < results.length; i++) {
          if (results[i].poster_path) {
            results[i].favorited = false;
            filteredResults.push(results[i]);
          }
        }

        dispatch({ type: SEARCH_MOVIE_SUCCESS, payload: filteredResults });
      })
      .catch(() => {
        dispatch({ type: SEARCH_ERROR, payload: 'Search Failed' });
      });
  };
};
